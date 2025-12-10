const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname));

app.get('/api/odata',async (req,res)=>{

    try {
        const api = await fetch('https://services.odata.org/v4/northwind/northwind.svc/Products');
        const data = await api.json();
    
        res.json(data);
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  
});