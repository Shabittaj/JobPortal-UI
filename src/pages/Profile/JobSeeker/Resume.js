import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Resume = () => {
    const [show, setShow] = useState(false);
    const [resume, setResume] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setResume(file);
    };

    const handleUpload = async () => {
        try {
            const token = localStorage.getItem('token');
            const formData = new FormData();
            formData.append('resume', resume);

            const response = await fetch('https://jobportal-api-tiu2.onrender.com/app/v1/profile/update-resume', {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                console.log('Upload successful');
                alert('Upload successful');
                // Optionally, you can handle success here (e.g., show a success message)
            } else {
                console.error('Upload failed');
                // Optionally, you can handle error here (e.g., show an error message)
            }
        } catch (error) {
            console.error('Error uploading resume:', error);
            // Optionally, you can handle error here (e.g., show an error message)
        } finally {
            // Close the modal regardless of success or failure
            handleClose();
        }
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <h3 className="mb-2 text-uppercase text-left">
                        <i className="fa fa-building"></i> &nbsp; Update Latest Resume
                    </h3>
                </div>
            </div>

            <Button variant="primary" onClick={handleShow}>
                Upload
            </Button>
            {show && (
                <Modal show={show} onHide={handleClose} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title>Upload Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="form-group">
                            <label htmlFor="resume">Choose file:</label>
                            <input type="file" className="form-control-file" id="resume" onChange={handleFileChange} />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpload}>
                            Upload
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};
