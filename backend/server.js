const express = require('express');
const app = express();
const port = 3001; 

app.use(express.json()); // Middleware to parse JSON requests

// Define routes here...

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.post('/api/process-url', async (req, res) => {
    var { email, URL } = req.body;
    // var url = url.toString()
    const encodedUrl = encodeURIComponent(URL);
    const { spawn } = require('child_process');
    const pythonProcess = spawn('python3', ['download_youtube.py', encodedUrl, email]);
    pythonProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data.toString()}`);
    });

    pythonProcess.stderr.on('data', (data) => {
        // Handle errors here
        console.error(`stderr: ${data.toString()}`);
    });

    pythonProcess.on('exit', (code) => {
        if (code === 0) {
            // Python script executed successfully
            console.log('Python script finished successfully');
            res.json({ message: 'URL processed successfully' });
        } else {
            // Handle non-zero exit code (error in Python script)
            console.error('Python script exited with code ${code}');
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
    
});