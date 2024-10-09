import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const mailData = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: process.env.GOOGLE_MAIL_APP_EMAIL,
      pass: process.env.GOOGLE_MAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GOOGLE_MAIL_APP_EMAIL,
    to: mailData.email.value,
    subject: "Notification de réception du formulaire de contact",
    html: `Bonjour ${mailData.name.value},
    <br/><br/>
    Vous recevez ce mail de confirmation suite à la soumission de votre demande de contact. Nous vous remercions de l'intérêt que vous portez à notre entreprise 
    et vous assurons une réponse dans les plus brefs délais.
    <br/><br/>
    L'équipe Curaconnect vous souhaite une excellente journée.
    <br/><br/>
    Ceci est un mail automatique, merci de ne pas y répondre.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ sent: true });
  } catch (error) {
    console.error("error sending email ", error);
    return Response.json({ sent: true });
  }
}

