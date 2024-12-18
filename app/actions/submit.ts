'use server'

import nodemailer from 'nodemailer'

export async function submitContactForm(formData: {
  name: string
  email: string 
  message: string
}) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error('Missing email configuration')
    return { success: false, message: 'Erro de configuração do servidor de email' }
  }
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })

  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    replyTo: formData.email,
    subject: `Nova mensagem de contato de ${formData.name}`,
    html: `
      <h3>Nova mensagem de contato do seu portfólio</h3>
      <p><strong>Nome:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mensagem:</strong></p>
      <p>${formData.message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return { success: true, message: 'Email enviado com sucesso!' }
  } catch (error) {
    console.error('Erro ao enviar email:', error)
    if ((error as { code?: string }).code === 'EAUTH') {
      return { 
        success: false, 
        message: 'Erro de autenticação do servidor de email. Verifique se você está usando uma senha de app válida do Gmail.'
      }
    }
    return { success: false, message: 'Erro ao enviar email. Tente novamente mais tarde.' }
  }
}
