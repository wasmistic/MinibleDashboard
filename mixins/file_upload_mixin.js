export default{

  methods:{
    uploadFileToCloudinary(file,folder) {
      return new Promise(function (resolve, reject) {
        //Ideally these to lines would be in a .env file
        const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/afrealapp/upload';
        const CLOUDINARY_UPLOAD_PRESET = 'clientapp';

        let formData = new FormData();
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
        formData.append('folder', folder);
        formData.append('file', file);

        let request = new XMLHttpRequest();
        request.open('POST', CLOUDINARY_URL, true);
        request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

        request.onreadystatechange = () => {
          // File uploaded successfully
          if (request.readyState === 4 && request.status === 200) {
            let response = JSON.parse(request.responseText);
            resolve(response);
          }

          // Not succesfull, let find our what happened
          if (request.status !== 200) {
            let response = JSON.parse(request.responseText);
            let error = response.error.message;
            alert('error, status code not 200 ' + error);
            reject(error);
          }

        };

        request.onerror = (err) => {
          alert('error: ' + err);
          reject(err);
        };

        request.send(formData);
      });
    },
    deleteFilesFromCloudinary(ids){
      return new Promise(function (resolve, reject) {
        let oururl = "https://338952283614233:qcmRxCld82udK8xXacAiLg5vrzw@api.cloudinary.com/v1_1/afrealapp/resources/image/upload"
        // let p = "CLOUDINARY_URL=cloudinary://338952283614233:qcmRxCld82udK8xXacAiLg5vrzw@afrealapp"
      const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/afrealapp/upload';
      const CLOUDINARY_UPLOAD_PRESET = 'clientapp';
      let request = new XMLHttpRequest();
      request.open('DELETE', oururl + '?public_ids[]=' + ids, true);
      request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

      request.onreadystatechange = () => {
        // File uploaded successfully
        if (request.readyState === 4 && request.status === 200) {
          let response = JSON.parse(request.responseText);
          resolve(response);
        }

        // Not succesfull, let find our what happened
        if (request.status !== 200) {
          let response = JSON.parse(request.responseText);
          let error = response.error.message;
          alert('error, status code not 200 ' + error);
          reject(error);
        }

      };

      request.onerror = (err) => {
        alert('error: ' + err);
        reject(err);
      };

      request.send(null);
      });
    }
  }
}
