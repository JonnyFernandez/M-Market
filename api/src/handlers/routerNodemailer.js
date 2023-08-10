require("dotenv").config();
const { ID_CLIENTE, SECRETO_DEL_CLIENTE, REFRESH_TOKEN } = process.env;
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// Configuracion para oauth 2
const oAuth2Client = new google.auth.OAuth2(
  ID_CLIENTE,
  SECRETO_DEL_CLIENTE,
  "https://developers.google.com/oauthplayground"
);
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

const sendMail = async (req, res) => {
  const { name, image, price, description } = req.body;
  try {
    // Crear un token de acceso válido utilizando el cliente OAuth 2
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        type: "OAuth2",
        user: "chambijuanjose05@gmail.com",
        clientId: ID_CLIENTE,
        clientSecret: SECRETO_DEL_CLIENTE,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: "M-Market <chambijuanjose05@gmail.com>",
      to: "chambijuanjose05@gmail.com",
      subject: "M-Market | Compra Realizada",
      html: `
      <html>
      <head>
        <style>
        body{
          color: black;
        }
        .TitleNotification {
          text-align:center;
          width: 90%;
          height: auto;
          background-color: #ff8000;
          border-radius: 10px 10px 0 0;
          border: 1px solid #0000003a;
          padding: 20px;
          color: black;
          margin:0;
        }
        .BodyNotification{
          display:inline-block;
          width: 90%;
          min-height: 50vh;
          border-radius: 0px 0px 20px 20px;
          border: 1px solid #0000003a;
          padding: 20px;
        }
        .CardBought{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          width: 30%;
          height: 80px;
          border: 1px solid #0000003a;
          border-radius: 10px;
          user-select: none;
          margin: 20px 0;
          padding: 15px;
        }
        .ContainerImagen{
          display: flex;
          justify-content: center;
          align-items: center;
          width:25%;
          height:80px;
          background-color: #ffffff;
          border-radius: 10px 0 0 10px;
        }
        .Imagen{
          width: 100%;
          border-radius: 10px 0 0 10px;
        }
        .ContainerInfo{
          width:75%;
          display:inline-block;
          background-color: #ffffff;
          border-radius: 0px 10px 10px 0;
        }
        .h3Info{
          font-size:15px;
          margin:0;
        }
        .pInfo{
          font-size:12px;
          margin:0;
        }
        .message {
          font-style: italic;
          color: #555;
          text-align: center;
        }
        
        </style>
      </head>
      <body>
        <h1 class="TitleNotification">¡Gracias por tu compra en M-Market!</h1>
        <div class="BodyNotification">
          <h3 class="message">¡Es un placer saludarte! Queremos agradecerte sinceramente por haber elegido M-Market para tus compras en línea. Tu satisfacción es nuestra prioridad, y estamos encantados de que hayas confiado en nosotros para satisfacer tus necesidades.<br>
          Tu pedido ha sido confirmado y está en proceso de preparación. Aquí tienes un resumen de tu compra:</h3>
          <div class="CardBought">
            <div class="ContainerImagen">
              <img class="Imagen" src=${image} alt="Imagen">
            </div>
            <div class="ContainerInfo">
              <h3 class="h3Info">${name} <br/></h3>
              <p class="pInfo">$ ${price} </br></p>
              <p class="pInfo">${description}</p>
            </div>
          </div>
          <p class="message">
          Una vez más, te agradecemos por ser parte de M-Market. Valoramos tu confianza y esperamos brindarte una experiencia de compra excepcional.<br>
          ¡Gracias por elegirnos y esperamos que disfrutes de tus productos!<br>
          Saludos cordiales, El equipo de M-Market<br></p>
          <p class="message">¡Desde MMarket esperamos que disfrutes de tu compra!</p>
        </div>
      </body>
    </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const register = async (req, res) => {
  // const { name } = req.body;
  try {
    // Crear un token de acceso válido utilizando el cliente OAuth 2.0
    const accessToken = await oAuth2Client.getAccessToken();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        type: "OAuth2",
        user: "chambijuanjose05@gmail.com",
        clientId: ID_CLIENTE,
        clientSecret: SECRETO_DEL_CLIENTE,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });
    const mailOptions = {
      from: "MMarket <chambijuanjose05@gmail.com>",
      to: "chambijuanjose05@gmail.com",
      subject: "M-Market | ¡Bienvenido a M-Market! 🎉",
      html: `
      <html>
      <head>
        <style>
        .TitleNotification {
          text-align:center;
          width: 95%;
          height: auto;
          background-color: #ff8000;
          border-radius: 10px 10px 0 0;
          border: 1px solid #0000003a;
          padding: 20px;
          color: black;
          margin: 0;
        }
        .BodyNotification{
          display:inline-block;
          text-align:center;
          width: 95%;
          min-height: 50vh;
          border-radius: 0px 0px 20px 20px;
          border: 1px solid #0000003a;
          padding: 20px;
          margin: 0;
        }
        .message {
          font-style: italic;
          color: #555;
          text-align: center;
        }
        </style>
      </head>
      <body>
        <h1 class="TitleNotification">¡Bienvenido a M-Market! 🎉</h1>
        <div class="BodyNotification">
          <h2 class="message">Hola Jose,</h2>
          <h3 class="message">¡Bienvenido a M-Market! Nos alegra verte aquí y queremos darte una cálida bienvenida a nuestra comunidad. Estamos emocionados de que hayas decidido unirte a nosotros para descubrir productos increíbles y una experiencia de compra única.<br>
          En M-Market, no solo encontrarás una amplia gama de productos de alta calidad, sino que también tendrás acceso a ofertas especiales, promociones exclusivas y actualizaciones sobre las últimas tendencias. Queremos que te sientas como en casa mientras exploras nuestro catálogo y haces tus compras.<br>
          ¡No dudes en navegar por nuestras categorías y explorar lo que tenemos para ofrecerte! Si tienes alguna pregunta, comentario o necesitas ayuda en cualquier momento, nuestro equipo de atención al cliente está aquí para ayudarte.<br>
          Como agradecimiento por unirte a nosotros, te ofrecemos un descuento de 15% especial en tu próxima compra. Solo tienes que aplicar el código "[Código de Descuento]" al finalizar tu compra para aprovecharlo.<br>
          Una vez más, te damos la bienvenida y esperamos que disfrutes de una experiencia de compra excepcional en M-Market. ¡Esperamos verte pronto explorando nuestros productos y encontrando lo que más te guste!</h3>
          <p class="message">¡Saludos y felices compras!<br>
          Atentamente, <br>
          El Equipo de M-Market</p>
        </div>
      </body>
    </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { sendMail, register };