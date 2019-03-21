const boardList = '5c6d05a8f4d0e337f036c443';
const authenticationSuccess = () => console.log('Successful authentication');
const authenticationFailure = () => console.log('Failed authentication');
const createCard = (email, name, phone, skype, descr) => ({
	name: `Contact with ${name}`,
	desc: `
	User ${name} wants contact with Leviossa.net.
	email: ${email},
	name: ${name},
	phone: ${phone},
	skype: ${skype},
	description: ${descr},
	`,
	idList: boardList,
	pos: 'top',
});
const resetFields = () => {
	$('#emailFirst').val('');
	$('#name').val('');
	$('#phone').val('');
	$('#skype').val('');
	$('#question').val('');
}
$(document).ready(function(){AOS.init({duration:1000});$(".naviLink").on('click',function(event){$('html, body').animate({scrollTop:$(this.hash).offset().top},800)})
$('.reviewsSlider').slick({dots:!0,infinite:!0,speed:500,fade:!0,cssEase:'linear',autoplay:!0,autoplaySpeed:3000});let modalContent='<div id="contactModal">'+'<div class="contactMHead">Contact Us</div>'+'<div class="contactMInputBlock"><input id="emailFirst" type="email" pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" class="contactMInput" placeholder="Your email address *" required/><input id="name" type="text" class="contactMInput" placeholder="Your Name *"/></div>'+'<div><input id="phone" type="text" class="contactMInput" placeholder="Phone number"/><input id="skype" type="text" class="contactMInput" placeholder="Skype"/></div>'+'<div><textarea id="question" class="contactMArea" placeholder="Message or question *"></textarea></div>'+'<div id="errMsg">Fill in the required fields, please.</div>'+'<div id="errEmailMsg">Please enter a valid email address.</div>'+
'<div><div id="sendMessage" class="ld-ext-right contactMButton">SEND MESSAGE<div class="ld ld-ring ld-spin"></div></div>'+'</div>';
let contactModal=new jBox('Modal',{attach:'.contactStart',width:750,height:430,trigger:'click',animation: {open:'slide:left',close:'slide:right',fade:5},onCreated:function(){this.setContent(modalContent)
$("#phone").mask("(999) 999-99-99")},onOpen:function(){$("#sendMessage").on("click",function(event){let emailField=document.getElementById('emailFirst');let valid=emailField.checkValidity();if(!valid){$("#errEmailMsg").addClass("displayErr");$("#emailFirst").addClass("invalidValue")
return}else{event.preventDefault();$("#errEmailMsg").removeClass("displayErr");$("#emailFirst").removeClass("invalidValue")}
if(!$('#emailFirst').val()||!$('#question').val()||!$('#name').val()){!$('#emailFirst').val()?$("#emailFirst").addClass("invalidValue"):$("#emailFirst").removeClass("invalidValue")
!$('#name').val()?$("#name").addClass("invalidValue"):$("#name").removeClass("invalidValue")
!$('#question').val()?$("#question").addClass("invalidValue"):$("#question").removeClass("invalidValue")
$("#errMsg").addClass("displayErr");return}else{$("#emailFirst").removeClass("invalidValue")
$("#name").removeClass("invalidValue")
$("#question").removeClass("invalidValue")}
$("#errMsg").removeClass("displayErr");$("#sendMessage").addClass("running");let task={name:'New message from: '+$('#emailFirst').val(),notes:'Name:'+$('#name').val()+'\nPhone: '+$('#phone').val()+'\nSkype: '+$('#skype').val()+'\n\n'+$('#question').val(),workspace:'836996836365825',projects:'840544360755451',assignee:'840739847405451',followers:'836993699841440'}
window.Trello.post('/cards/',
createCard($('#emailFirst').val(),$('#name').val(),$('#phone').val(),$('#skype').val(),$('#question').val()),(success) => {$("#sendMessage").removeClass("running");contactModal.close()},(error) => {console.log('err',err);$("#sendMessage").removeClass("running");contactModal.close()})})},onClose:function(){$("#sendMessage").unbind();resetFields();}});let workItemLight='<section class="work-item-light" class="reason" data-aos="fade-up">'+'<div class="work-right"><img class="works-imgs" src="assets/shypple11.jpg" alt="Shypple"/></div>'+'<div id="work-left" class="work-left" data-aos="fade-up" data-aos-duration="1800">'+'<div class="work-light-left-head">Shypple</div>'+'<div class="work-light-left-tag"><div>Ruby on Rails</div><div>React.js</div><div>JavaScript</div><div>Git</div><div>Active Admin</div><div>TypeScript</div><div>CoffeeScript</div><div>Material UI</div><div>Jira</div><div>SideKiq</div><div>HTML, CSS, SCSS</div><div>Bootstrap</div></div>'+'<div class="work-light-left-text">Shypple has became the startup of the year in Netherlands. It is large and convenient web service that allows to deliver loads of different sizes all over the world. This project gave people the possibility to track the load on all the stages of the order, therefore the customer can always know how much and for what he pays.</div>'+'<div class="work-light-left-button"><button class="fullProject fP">See full project</button></div></div></section>';let workItemDark='<section class="work-item-dark" class="reason" data-aos="fade-up">'+'<div id="work-right" class="work-right" data-aos="fade-up" data-aos-duration="1800">'+'<div class="work-light-left-head">Ordway</div>'+'<div class="work-light-left-tag"><div>Ruby on Rails</div><div>React.js</div><div>JavaScript</div><div>Git</div><div>Stripe</div><div>Waffle.io</div><div>HTML, CSS, SCSS</div><div>Bootstrap</div></div>'+'<div class="work-light-left-text">Ordway is an ideal business platform. It simplifies how you price products, send invoices, collect payments, and recognize revenue. This project was created to support aspiring businessmen and to give them an incentive to grow and achieve their goals. Ordway is for those who wants to save time, money and develop the attainments of successful person.</div>'+'<div class="work-light-left-button"><button class="fullProject fP">See full project</button></div></div>'+'<div class="work-left"><img class="works-imgs" src="assets/ordwayMain.png" alt="Ordway" /></div></section>';let works=[!0,!1,!0,!1,!0,!1,!0,!1,!0,!1,!0];let previewWorks=works.slice(0,2);$.each(previewWorks,(index,value)=>{return value?$("#works").append(workItemLight):$("#works").append(workItemDark)});let count=3;$('#showMore').on('click',function(){for(let i=count+1;i<count+4;i++){works[i]?$("#works").append(workItemLight):$("#works").append(workItemDark)
if(i==works.length-1){$('#showMore').hide();break}}
count+=3});const bearer="0/a2ea9a2e9b62a0a13520ccc148dc762c";let descModal=new jBox('Modal',{width:1150,height:600,attach:'.tooltip',trigger:'click',onCreated:function(){},onOpen:function(){$('.full-photo-sld').slick({dots:!0,infinite:!0,speed:500,slidesToShow: 1,fade:!0,cssEase:'linear',autoplay:!0,autoplaySpeed:3000})},onClose:function(){}});function getFullItem(item){let img, img2;if(item){img='<img class="full-imgs" src="assets/shypple11.jpg" alt="Shypple"/>';img2='<img class="full-imgs" src="assets/shypple22.png" alt="Shypple"/>'}else{img='<img class="works-imgs" src="assets/ordway11.jpg" alt="Ordway" />';img2='<img class="works-imgs" src="assets/ordway22.jpg" alt="Ordway" />'};let fullItem;item?fullItem='<section>'+'<div class="full-top tooltip">'+'<div class="full-photos"><div class="full-photo-sld">'+'<div class="full-img-block">'+img+'</div>'+'<div class="full-img-block">'+img2+'</div>'+'</div></div>'+'<div class="full-desc">'+'<div class="full-desc-top">Shypple has became the startup of the year in Netherlands. It is large and convenient web service that allows to deliver loads of different sizes all over the world. This project gave people the possibility to track the load on all the stages of the order, therefore the customer can always know how much and for what he pays.<br></div>'+'<div class="full-desc-bottom"><div>Ruby on Rails</div><div>React.js</div><div>JavaScript</div><div>Git</div><div>Active Admin</div><div>TypeScript</div><div>CoffeeScript</div><div>Material UI</div><div>Jira</div><div>SideKiq</div><div>HTML, CSS, SCSS</div><div>Bootstrap</div></div>'+'</div></div>'+'<div class="full-bottom">'+'<div class="full-bottom-avatar"><img src="assets/TIMO C.jpeg" alt="avatar"/></div>'+'<div class="full-bottom-info"><div><div class="full-bottom-info-name">Timo Cochius</div>'+'<div class="full-bottom-info-text">Dmitry is a really great developer. His front- and back-end knowledge and experience are off value value to our team. He picks up work quickly and understands business logic as well. This enables him to think with and talk to business partners in order to improve the application as a whole, not just technically. I would highly recommend him for any front- or back-end project!</div></div></div>'+'</div>'+'</section>':fullItem='<section>'+'<div class="full-top">'+'<div class="full-photos"><div class="full-photo-sld">'+'<div class="full-img-block">'+img+'</div>'+'<div class="full-img-block">'+img2+'</div>'+'</div></div>'+'<div class="full-desc">'+'<div class="full-desc-top">Ordway is an ideal business platform. It simplifies how you price products, send invoices, collect payments, and recognize revenue. This project was created to support aspiring businessmen and to give them an incentive to grow and achieve their goals. Ordway is for those who wants to save time, money and develop the attainments of successful person.<br></div>'+'<div class="full-desc-bottom"><div>Ruby on Rails</div><div>React.js</div><div>JavaScript</div><div>Git</div><div>Stripe</div><div>Waffle.io</div><div>HTML, CSS, SCSS</div><div>Bootstrap</div></div>'+'</div></div>'+'<div class="full-bottom">'+'<div class="full-bottom-avatar"><img src="assets/SAMEER G.jpeg" alt="avatar"/></div>'+'<div class="full-bottom-info"><div><div class="full-bottom-info-name">Sameer Gulati</div>'+'<div class="full-bottom-info-text">This is a real team of professionals. They met all deadlines. Quality is at the highest level. I did not regret that I chose Leviossa for my project.</div></div></div>'+'</div>'+'</section>';return fullItem}
$('.fullProject').on('click',(event)=>{$(event.target).parent().parent()[0].id=="work-right"?descModal.setContent(getFullItem(!1)):descModal.setContent(getFullItem(!0))
descModal.open()})
let scrollFunction=function(){document.documentElement.scrollTop>500?document.getElementById("naviBar").style.top="0":document.getElementById("naviBar").style.top="-100px"}
window.onscroll=()=>{scrollFunction()}})

