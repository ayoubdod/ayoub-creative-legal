// Email service utilities for backend integration
// This file provides utilities to handle email sending when you deploy the project

import { emailTemplates } from "@/components/contact/EmailTemplates";

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  subject: string;
  message: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  priority: "low" | "medium" | "high";
}

export interface EmailResult {
  success: boolean;
  message: string;
  data?: any;
}

// Mock email service for development/testing
export class MockEmailService {
  static async sendContactEmail(formData: ContactFormData): Promise<EmailResult> {
    console.log("📧 Mock Email Service - Sending contact email...");
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Generate email templates
    const adminEmail = emailTemplates.newContactRequest(formData);
    const userEmail = emailTemplates.confirmationEmail(formData);
    
    console.log("📤 Email to Admin:", adminEmail);
    console.log("📤 Confirmation to User:", userEmail);
    
    // Log for development
    console.log("✅ Emails would be sent to:");
    console.log(`   - Admin: ${adminEmail.to}`);
    console.log(`   - User: ${userEmail.to}`);
    
    return {
      success: true,
      message: "Emails sent successfully",
      data: { adminEmail, userEmail }
    };
  }
}

// Real email service template for backend integration
export class EmailService {
  private apiKey: string;
  private baseUrl: string;
  
  constructor(apiKey: string, baseUrl: string = "https://api.your-email-service.com") {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }
  
  async sendContactEmail(formData: ContactFormData): Promise<EmailResult> {
    try {
      // Generate email templates
      const adminEmail = emailTemplates.newContactRequest(formData);
      const userEmail = emailTemplates.confirmationEmail(formData);
      
      // Send admin notification
      const adminResponse = await fetch(`${this.baseUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          ...adminEmail,
          from: "noreply@ayoubhammady.com", // Your domain
        }),
      });
      
      // Send user confirmation
      const userResponse = await fetch(`${this.baseUrl}/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${this.apiKey}`,
        },
        body: JSON.stringify({
          ...userEmail,
          from: "ayoub@ayoubhammady.com", // Your personal email
        }),
      });
      
      if (!adminResponse.ok || !userResponse.ok) {
        throw new Error("Failed to send emails");
      }
      
      return {
        success: true,
        message: "Emails sent successfully",
        data: {
          adminEmailId: (await adminResponse.json()).id,
          userEmailId: (await userResponse.json()).id,
        }
      };
      
    } catch (error) {
      console.error("Email service error:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Unknown error occurred",
      };
    }
  }
}

// Webhook integration for services like Zapier, Make.com, etc.
export class WebhookService {
  static async triggerWebhook(
    webhookUrl: string, 
    formData: ContactFormData
  ): Promise<EmailResult> {
    try {
      const payload = {
        ...formData,
        timestamp: new Date().toISOString(),
        source: "portfolio_website",
        userAgent: navigator.userAgent,
        referrer: window.location.href,
      };
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors", // Handle CORS issues
        body: JSON.stringify(payload),
      });
      
      return {
        success: true,
        message: "Webhook triggered successfully",
        data: payload,
      };
      
    } catch (error) {
      console.error("Webhook error:", error);
      return {
        success: false,
        message: error instanceof Error ? error.message : "Webhook failed",
      };
    }
  }
}

// Example integration patterns:

/* 
// 1. Using with Nodemailer (Node.js backend)
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: 'hammadyayoub@outlook.com',
    pass: 'your-app-password'
  }
});

export async function sendContactEmail(formData: ContactFormData) {
  const { newContactRequest, confirmationEmail } = emailTemplates;
  
  await transporter.sendMail(newContactRequest(formData));
  await transporter.sendMail(confirmationEmail(formData));
}

// 2. Using with SendGrid
import sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// 3. Using with Resend
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

// 4. Using with AWS SES
import AWS from 'aws-sdk';
const ses = new AWS.SES({ region: 'us-east-1' });
*/