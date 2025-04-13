const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, '../public/qr-codes');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// QR code options
const options = {
  errorCorrectionLevel: 'H',
  margin: 1,
  color: {
    dark: '#EDC87C', // Your brand gold color
    light: '#FFFFFF'
  },
  width: 400
};

// Generate QR codes
const urls = [
  {
    url: 'https://perpetuaprecision.com/#team-cards',
    filename: 'kiley-qr.png'
  },
  {
    url: 'https://perpetuaprecision.com/#team-cards',
    filename: 'gabriel-qr.png'
  }
];

urls.forEach(({ url, filename }) => {
  QRCode.toFile(
    path.join(outputDir, filename),
    url,
    options,
    (err) => {
      if (err) throw err;
      console.log(`Generated ${filename}`);
    }
  );
}); 