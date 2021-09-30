import React from 'react'
import { simpleGetCall, simplePostCall } from '../../api/ApiServices'
import Button from '@mui/material/Button';

const Certificate = () => {

  const generateCertificate = () => {
    const url = 'http://localhost:5000/certificate/generate'
    const certificateData = {
      studentName: 'Shri Shreyas Bansode',
      courseName: 'Android Masterclass',
      dateOfCompletion: '24th August 2020',
    }

    simplePostCall(url, JSON.stringify(certificateData))
      .then(response => {
        console.log('Certificate generation response: ' + response.data)
      })
      .catch(error => {
        console.log('Error generating certificate: ' + error)
      })
    //downloadCertificate()
  }

  const downloadCertificate = () => {
    const url = 'http://localhost:5000/certificate/download'
    simpleGetCall(url)
      .then((response) => {
        console.log('Downloading certificate response: ' + response)
      })
      .catch((error) => {
        console.log('Error downloading certificate: ' + error)
      })
  }

  return (
    <div>
      <Button variant="contained" onClick={generateCertificate}>Generate Certificate</Button>
      <Button variant="contained" >Download Certificate</Button>

      <a href="https://res.cloudinary.com/dihauxbnm/image/upload/fl_attachment:ShreyasBansode_v1632891589/yn3eebcv7qg0bwm4dceb.png"
      >
        Download certificate
      </a>
    </div>
  )
}

export default Certificate

