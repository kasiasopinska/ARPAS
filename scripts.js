//checking username and password
function logIn(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if(username == "student" && password == "123")
		{
			alert("logging ok");
			window.location.href="dashboard.html";
		}
	else if (username == "teacher" && password == "123")
		{
			alert("logging ok");
			window.location.href="dashboard_wykładowca.html";
		}
	else
		{
			alert("logging failed");
			document.location.reload(true);
		}
}

//show/hide password
function show_hide_password(){
	const icon_show_hide_password = document.querySelector('#icon_show_hide_password')
	const text_password = document.querySelector('#password')

	//checking type of input
	if(text_password.type == 'password')
		{
			text_password.type = 'text'
		}
	else{
			text_password.type = 'password'
		}
	
	//checking the icon
	if(icon_show_hide_password.src.includes('off'))
		{
			icon_show_hide_password.src = './icons/eye.svg'
		}
	else{
		icon_show_hide_password.src = './icons/eye-off.svg'
	}

}

function dropdown_action() {
  document.getElementById("dropdown-menu").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdown_button')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


const dragArea = document.querySelector('.upload-space');
const dragText = document.querySelector('.upload-space__prompt');
let file;
let input = document.querySelector('#browse');
let button = document.querySelector('#browse-button');

button.onclick = () => {
	input.click();
};

input.addEventListener('change', function(){
	file = this.files[0];
	dragArea.classList.add('active');
	show_chosen_work();
})

dragArea.addEventListener('dragover', (event) => {
	event.preventDefault();
	dragArea.classList.add('active');
	dragText.textContent = "Release to upload";
});

dragArea.addEventListener('dragleave', () =>{
	dragArea.classList.remove('active');
	dragText.textContent = "Drop file here";
});

dragArea.addEventListener('drop', () =>{
	event.preventDefault();
	file = event.dataTransfer.files[0];
	show_chosen_work();
});


function show_chosen_work(){
	let fileType = file.type;
	let validTypes = ['image/jpeg', 'image/jpg', 'application/pdf'];
	
	if(validTypes.includes(fileType)){
		let fileReader = new FileReader();
		
		fileReader.onload = () =>{
			let fileURL = fileReader.result;
			let imgTag = `<img src="${fileURL}" alt="">`;
			dragArea.innerHTML = imgTag;
		};
	fileReader.readAsDataURL(file);
	console.log(file.s);
	}
	else{
		alert('This type of file is not supported');
		dragArea.classList.remove('active');
	}
}

function change_photo(){
	const dragArea = document.querySelector('#profile_pic');
}



