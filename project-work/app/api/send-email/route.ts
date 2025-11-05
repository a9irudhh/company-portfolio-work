import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      address,
      monthlyBill,
      installTime,
      contactTime,
    } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // HTML email template
    const htmlEmail = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Quote Request</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          padding: 20px;
        }
        .header {
          background-color: #004a99;
          color: #ffffff;
          padding: 10px;
          text-align: center;
        }
        .content {
          padding: 20px;
        }
        .content h2 {
          color: #004a99;
        }
        .info-table {
          width: 100%;
          border-collapse: collapse;
        }
        .info-table td {
          padding: 10px;
          border-bottom: 1px solid #dddddd;
        }
        .info-table tr:last-child td {
          border-bottom: none;
        }
        .label {
          font-weight: bold;
          color: #333333;
        }
        .value {
          color: #555555;
        }
        .footer {
          text-align: center;
          padding: 20px;
          font-size: 12px;
          color: #777777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Sharda Construction</h1>
        </div>
        <div class="content">
          <h2>New Solar Panel Quote Request</h2>
          <p>A new quote request has been submitted through the website.</p>
          <table class="info-table">
            <tr>
              <td class="label">Name:</td>
              <td class="value">${name}</td>
            </tr>
            <tr>
              <td class="label">Phone:</td>
              <td class="value">${phone}</td>
            </tr>
            <tr>
              <td class="label">Email:</td>
              <td class="value">${email}</td>
            </tr>
            <tr>
              <td class="label">Address:</td>
              <td class="value">${address}</td>
            </tr>
            <tr>
              <td class="label">Monthly Bill:</td>
              <td class="value">₹${monthlyBill}</td>
            </tr>
            <tr>
              <td class="label">Preferred Install Time:</td>
              <td class="value">${installTime}</td>
            </tr>
            <tr>
              <td class="label">Best Time to Contact:</td>
              <td class="value">${contactTime}</td>
            </tr>
          </table>
        </div>
        <div class="footer">
          <p>This is an automated email from the Sharda Construction website.</p>
        </div>
      </div>
    </body>
    </html>
    `;

    // Send email
    await transporter.sendMail({
      from: `"Sharda Construction" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Solar Quote Request from ${name}`,
      html: htmlEmail,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
