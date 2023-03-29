import QrCode from "../assets/image-qr-code.png";

const Card = () => {
  return (
    <div className="card">
      <img className="card-img" src={QrCode} alt="QR Code" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default Card;
