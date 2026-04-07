//your JS code here. If required.
document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data using name attributes
            const formData = new FormData(this);
            const firstName = formData.get('First Name');
            const lastName = formData.get('Last Name');
            const phoneNumber = formData.get('Phone Number');
            const emailId = formData.get('Email ID');
            
            // Create alert message with exact spacing
            const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${emailId}`;
            
            alert(alertMessage);
        });
