// Email templates for backend integration
// These are examples you can use when setting up your email service

export const emailTemplates = {
  // Template for emails sent to Ayoub
  newContactRequest: (data: any) => ({
    to: "hammadyayoub@outlook.com",
    subject: `New Contact Request: ${data.subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Request</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
            color: #334155;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #64499D, #8B6FD1);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px;
          }
          .field {
            margin-bottom: 20px;
            padding: 15px;
            background: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #64499D;
          }
          .field-label {
            font-weight: 600;
            color: #64499D;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .field-value {
            font-size: 16px;
            color: #334155;
          }
          .priority-high {
            border-left-color: #ef4444;
          }
          .priority-high .field-label {
            color: #ef4444;
          }
          .message-box {
            background: #f1f5f9;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #0ea5e9;
          }
          .footer {
            background: #f8fafc;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #64748b;
          }
          .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .badge-legal { background: #ddd6fe; color: #5b21b6; }
          .badge-legaltech { background: #dbeafe; color: #1e40af; }
          .badge-creative { background: #fce7f3; color: #be185d; }
          .badge-consultation { background: #d1fae5; color: #065f46; }
          .badge-partnership { background: #fef3c7; color: #92400e; }
          .badge-other { background: #e5e7eb; color: #374151; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 New Contact Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Received ${new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</p>
          </div>
          
          <div class="content">
            <div class="field ${data.priority === 'high' ? 'priority-high' : ''}">
              <div class="field-label">Contact Information</div>
              <div class="field-value">
                <strong>${data.name}</strong><br>
                📧 ${data.email}<br>
                ${data.phone ? `📞 ${data.phone}<br>` : ''}
                ${data.company ? `🏢 ${data.company}<br>` : ''}
              </div>
            </div>

            <div class="field">
              <div class="field-label">Project Type</div>
              <div class="field-value">
                <span class="badge badge-${data.projectType}">${data.projectType.toUpperCase()}</span>
              </div>
            </div>

            <div class="field">
              <div class="field-label">Subject</div>
              <div class="field-value">${data.subject}</div>
            </div>

            ${data.budget ? `
            <div class="field">
              <div class="field-label">Budget Range</div>
              <div class="field-value">${data.budget}</div>
            </div>
            ` : ''}

            ${data.timeline ? `
            <div class="field">
              <div class="field-label">Timeline</div>
              <div class="field-value">${data.timeline}</div>
            </div>
            ` : ''}

            <div class="message-box">
              <div class="field-label">Message</div>
              <div class="field-value">${data.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>

          <div class="footer">
            <p>This email was sent from your portfolio website contact form.</p>
            <p>Response recommended within: ${data.priority === 'high' ? '2-4 hours' : '24-48 hours'}</p>
          </div>
        </div>
      </body>
      </html>
    `
  }),

  // Template for confirmation email to user
  confirmationEmail: (data: any) => ({
    to: data.email,
    subject: "Thank you for contacting Ayoub Hammady",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank you for your message</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
            color: #334155;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #64499D, #8B6FD1);
            color: white;
            padding: 30px;
            text-align: center;
          }
          .content {
            padding: 30px;
          }
          .highlight-box {
            background: #f0f9ff;
            border: 1px solid #bae6fd;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
          }
          .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #64499D, #8B6FD1);
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            margin: 10px;
          }
          .social-links {
            text-align: center;
            margin: 30px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #64499D;
            text-decoration: none;
          }
          .footer {
            background: #f8fafc;
            padding: 20px;
            text-align: center;
            font-size: 14px;
            color: #64748b;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✨ Thank You!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Your message has been received</p>
          </div>
          
          <div class="content">
            <p>Hello <strong>${data.name}</strong>,</p>
            
            <p>Thank you for reaching out regarding <strong>${data.projectType}</strong>. I appreciate your interest in working together!</p>

            <div class="highlight-box">
              <h3 style="margin-top: 0; color: #0369a1;">What happens next?</h3>
              <p>I'll review your message and get back to you within <strong>24-48 hours</strong> with a detailed response.</p>
              <p>For urgent matters, please don't hesitate to call or mention "URGENT" in your subject line.</p>
            </div>

            <p>In the meantime, feel free to:</p>
            <ul>
              <li>📱 Connect with me on <a href="https://linkedin.com/in/ayoub-hammady" style="color: #64499D;">LinkedIn</a></li>
              <li>🎨 Check out my latest work on <a href="https://instagram.com/ayoub.hammady" style="color: #64499D;">Instagram</a></li>
              <li>💼 View my portfolio and case studies</li>
            </ul>

            <div class="social-links">
              <a href="https://linkedin.com/in/ayoub-hammady">LinkedIn</a>
              <a href="https://instagram.com/ayoub.hammady">Instagram</a>
              <a href="https://github.com/ayoub-hammady">GitHub</a>
            </div>

            <p>Looking forward to our collaboration!</p>
            
            <p>Best regards,<br>
            <strong>Ayoub Hammady</strong><br>
            <em>Jurist • LegalTech Founder • Full-Stack Developer • Artist</em></p>
          </div>

          <div class="footer">
            <p>📧 hammadyayoub@outlook.com</p>
            <p>🌍 Casablanca, Morocco (GMT+1)</p>
            <p>This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `
  })
};

// Example usage for backend integration:
/*
import nodemailer from 'nodemailer';
import { emailTemplates } from './EmailTemplates';

export async function sendContactEmail(formData: any) {
  const transporter = nodemailer.createTransporter({
    // Your email configuration
  });

  // Send email to Ayoub
  const adminEmail = emailTemplates.newContactRequest(formData);
  await transporter.sendMail(adminEmail);

  // Send confirmation to user
  const userEmail = emailTemplates.confirmationEmail(formData);
  await transporter.sendMail(userEmail);
}
*/