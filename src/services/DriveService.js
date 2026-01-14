export const fetchDriveFolders = async () => {
  try {
    const response = await fetch('https://your-backend-api.com/drive/folders', {
      headers: { 'Authorization': 'Bearer YOUR_TOKEN' },
    });
    const json = await response.json();
    return json.folders;
  } catch (e) {
    console.error("DriveService error:", e);
    return [];
  }
};
