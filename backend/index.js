const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

// Google Drive auth
const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json", // da salvare come secret o locale
  scopes: ["https://www.googleapis.com/auth/drive.readonly"]
});

const drive = google.drive({ version: "v3", auth });

app.get('/drive/folders', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: "'132T5InVI5X12UR1cs_4oNs29ZBuYo9Iy' in parents",
      fields: "files(id, name, mimeType)"
    });
    const items = response.data.files.map(f => ({
      id: f.id,
      name: f.name,
      type: f.mimeType === 'application/vnd.google-apps.folder' ? 'folder' : 'file'
    }));
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Backend listening on port ${port}`));
