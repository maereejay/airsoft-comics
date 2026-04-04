// api/send-email.js

const SibApiV3Sdk = require("@sendinblue/client");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, projectName, mobile, details } = req.body;

  // ✅ Basic validation (prevents silent failures)
  if (!fullName || !email) {
    return res.status(400).json({ error: "Full name and email are required" });
  }

  try {
    // Init API client
    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    apiInstance.setApiKey(
      SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey,
      process.env.BREVO_API_KEY
    );

    // Email to you (form data)
    const sendToMe = {
      sender: { email: process.env.BREVO_VERIFIED_EMAIL },
      to: [{ email: process.env.BREVO_VERIFIED_EMAIL }],
      subject: `New project submission from ${fullName}`,
      htmlContent: `
        <h2>New Project Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Name:</strong> ${projectName}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Details:</strong> ${details}</p>
      `
    };

  
    console.log("API KEY:", process.env.BREVO_API_KEY);
    const response1 = await apiInstance.sendTransacEmail(sendToMe);
console.log("FULL RESPONSE 1:", JSON.stringify(response1, null, 2));

    // ❗ Check if Brevo actually returned a messageId
    if (!response1 || !response1.body || !response1.body.messageId) {
      return res.status(500).json({
        error: "Failed to queue email to admin"
      });
    }

    // Email to user (your template)
    const sendToUser = {
      sender: { email: process.env.BREVO_VERIFIED_EMAIL },
      to: [{ email }],
      subject: `Thanks for contacting AirSoft Comics`,
      htmlContent: `
        <p>Hi ${fullName},</p>
        <p>Thank you for reaching out to AirSoft Comics. We’re excited to learn more about your project.</p>
        <p>We specialize in premium creative work for comic and book authors. To better understand your vision, please complete our short project questionnaire below. It takes just 3–5 minutes and helps us review your needs accurately.</p>
        <p>Submit your brief here: <a href="https://tally.so/r/mJaZzr">Project Questionnaire</a></p>
        <p>Once submitted, we’ll review your responses and get back to you within 24 hours with clear next steps.</p>
        <p>Best regards,<br/>Sam Emma<br/>Creative Director, AirSoft Comics</p>
      `
    };

    const response2 = await apiInstance.sendTransacEmail(sendToUser);
    console.log("EMAIL TO USER RESPONSE:", response2);

    // ❗ Check second email too
    if (!response2 || !response2.body || !response2.body.messageId){
      return res.status(500).json({
        error: "Message received, but failed to send confirmation email"
      });
    }

    // ✅ Only return success if BOTH emails are properly queued
    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("FULL ERROR:", error);

    return res.status(500).json({
      error:
        error?.response?.body?.message ||
        error?.response?.text ||
        error.message ||
        "Unknown error occurred",
    });
  }
}