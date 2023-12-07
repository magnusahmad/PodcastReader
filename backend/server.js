const express = require('express');
const app = express();
const path = require('path');

app.use(express.json()); // Middleware to parse JSON requests
app.use(express.static(path.join(__dirname, '..', 'build')));
// Define routes here...

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
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