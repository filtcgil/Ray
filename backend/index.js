const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = process.env.PORT || 3000;

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",  // da GitHub secret
  scopes: ["https://www.googleapis.com/auth/drive.readonly"]
});

const drive = google.drive({ version: "v3", auth });

app.get('/drive/folders', async (req, res) => {
  try {
    const response = await drive.files.list({
      q: "mimeType='application/vnd.google-apps.folder' and '132T5InVI5X12UR1cs_4oNs29ZBuYo9Iy' in parents",
      fields: "files(id, name)"
    });
    const folders = response.data.files.map(f => ({ id: f.id, name: f.name, type: "folder" }));
    res.json(folders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
