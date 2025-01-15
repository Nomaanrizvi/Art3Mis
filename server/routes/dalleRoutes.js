import express from 'express'
import * as dotenv from 'dotenv'
import fs from 'fs';
import fetch from 'node-fetch';

const router = express.Router()



async function getImageBase64Json(prompt) {
  // Image details
  const width = 1024;
  const height = 1024;
  const seed = 42; // Each seed generates a new image variation
  const model = 'flux '; // Using 'flux' as default if model is not provided
  const imageUrl = `https://pollinations.ai/p/${encodeURIComponent(prompt)}?width=${width}&height=${height}&seed=${seed}&model=${model}`;

  // Step 1: Fetch the image from the URL
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();

  // Step 2: Convert the buffer to a Base64 string
  const base64Image = buffer.toString('base64');

  // Step 3: Create a JSON object
  const jsonResult = {
    image_base64: base64Image,
  };

  // Step 4: Return the JSON object
  return jsonResult;
}


router.route('/').get((req, res) => {
  res.send('Hello from DALL')
})

router.route('/').post(async (req, res) => {
  try {
    // console.log('✅ API hit with prompt:', req.body.prompt); // Debug log

    const { prompt } = req.body;

    // Get Base64 JSON
    const aiResponse = await getImageBase64Json(prompt);
    // console.log('✅ Image generated:', aiResponse); // Debug log

    // Extract the image data
    const image = aiResponse.image_base64;

    res.status(200).json({ photo: image });
  } catch (error) {
    // console.error('❌ Error in API:', error);
    res.status(500).send(error?.response?.data?.error?.message || 'Server error');
  }
});


export default router