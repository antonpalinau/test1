/*
var addNewAirlineBtn = document.querySelector('.btn.addNewInterstitialBtn');
var newAirlinePopUp = document.querySelector('.interstitialPopup');
var editBtnCell = document.querySelectorAll('.editBtnCell');
var editPopUp = document.querySelector('.editPopUp');
var cancelBtnEditPopUp = editPopUp.querySelectorAll('.cancelAddInterstitialBtn')
var cancelBtn = document.querySelectorAll('.cancelAddInterstitialBtn');
var airlineNameInput = document.getElementById('airlineName');
addNewAirlineBtn.addEventListener('click', openAddNewAirlinePopUp);
cancelBtn.forEach(function(item,index){
    item.addEventListener('click', closeAddNewAirlinePopUp);
})
cancelBtnEditPopUp.forEach(function(item,index){
    item.addEventListener('click', closeEditPopUp);
})
editBtnCell.forEach(function(item,index){
    item.setAttribute('data-index',index);
    item.addEventListener('click', openEditPopUp);
})
function openAddNewAirlinePopUp(event) {
    newAirlinePopUp.style.display = 'block';
}
function closeAddNewAirlinePopUp(event) {
    newAirlinePopUp.style.display = 'none';
}
function closeEditPopUp(event) {
    editPopUp.style.display = 'none';
}
function openEditPopUp(event) {
    var editCell = event.currentTarget;
    console.log(editCell);
    var flightLogo = document.querySelectorAll('.popUpRowOne')[0];
    var hintBox = document.querySelectorAll('.popUpRowOne')[1];
    if(editCell.classList.contains('genericEdit')){
        if(flightLogo.classList.contains('flightLogo') && hintBox.classList.contains('hintBoxText')){
            flightLogo.classList.remove('flightLogo');
            hintBox.classList.remove('hintBoxText');
        }
        airlineNameInput.disabled = true;
        editPopUp.style.display = 'block';
    } else if(editCell.classList.contains('editBtnCellNewlyCreated')){
        if(flightLogo.classList.contains('flightLogo') && hintBox.classList.contains('hintBoxText')){
            flightLogo.classList.remove('flightLogo');
            hintBox.classList.remove('hintBoxText');
        }
        airlineNameInput.disabled = false;
        editPopUp.style.display = 'block';
    } else {
        flightLogo.classList.add('flightLogo');
        hintBox.classList.add('hintBoxText');
        airlineNameInput.disabled = true;
        editPopUp.style.display = 'block';
    }
}
*/

var temlsObj = {
    addNewAirline : '<div class="interstitialPopup globalPopup default opened" style="top: 54px; display: block;">' +
    '<h2 class="popupTitle leaderboardTitle">Add Leaderboard Banner</h2>' +
    '<h2 class="popupTitle defaultTitle addAirlinePopUpText">Add Airline</h2>' +

    '<div class="popupRow fileNameRow clearfix">' +
        '<label class="labelTitle">Airline code</label>' +
        '<input type="text" name="uploadFileNameInput" class="uploadFileNameInput airlineCodeInput">' +
    '</div>' +

    '<div class="popupRow fileNameRow clearfix">' +
        '<label class="labelTitle">Airline name</label>' +
        '<input type="text" name="uploadFileNameInput" class="uploadFileNameInput airlineNameInput">' +
    '</div>' +

    '<h2 class="popupLogoUpdatingTitle defaultTitle addAirlinePopUpText">Logo Updating</h2>' +

    '<div class="popupRow intRow clearfix">' +
        '<div class="interstitialUploadBox">' +
            '<header class="clearfix">' +
                '<label class="uploadBtn">' +
                    '<input type="file" name="file" class="interstitialUploadInput" data-image-name="">' +
                '</label>' +
                '<h6 class="intImageTitle">' +
                    '<span class="defaultAnimationText">Flight Logo</span>' +
                    '<span class="leaderboardBannerText">Leaderboard Banner</span>' +
                '</h6>' +
            '</header>' +
            '<figure class="logoImgBox">' +
                '<img src="#" class="interstitialImg" alt="Logo">' +
                '<object class="logoObject" data=""></object>' +
            '</figure>' +
        '</div>' +
    '</div>' +

    '<div class="hintBox">' +
        '<p class="defaultHintText">Image dimensions must be 70px x 45px.</p>' +
        '<p class="defaultHintText">Maximum image weight should be 70 kb.</p>' +
        '<p class="defaultHintText">Allowed format png. </p>' +
        '<p class="leaderboardHintText">Image dimensions must be 728px x 90px.</p>' +
        '<p class="leaderboardHintText">Maximum image weight should be 100 kb.</p>' +
        '<p class="leaderboardHintText">Allowed format (swf, HTML5, jpg, png). </p>' +
    '</div>' +

    '<div class="popupRow intRow clearfix">' +
        '<div class="interstitialUploadBox">' +
            '<header class="clearfix">' +
                '<label class="uploadBtn">' +
                    '<input type="file" name="file" class="interstitialUploadInput" data-image-name="">' +
                '</label>' +
                '<h6 class="intImageTitle">' +
                    '<span class="defaultAnimationText">Matrix Logo</span>' +
                    '<span class="leaderboardBannerText">Leaderboard Banner</span>' +
                '</h6>' +
            '</header>' +
            '<figure class="logoImgBox">' +
                '<img src="#" class="interstitialImg" alt="Logo">' +
                '<object class="logoObject" data=""></object>' +
            '</figure>' +
        '</div>' +
    '</div>' +

    '<div class="hintBox">' +
        '<p class="defaultHintText">Image dimensions must be 58px x 33px.</p>' +
        '<p class="defaultHintText">Maximum image weight should be 70 kb.</p>' +
        '<p class="defaultHintText">Allowed format gif. </p>' +
        '<p class="leaderboardHintText">Image dimensions must be 728px x 90px.</p>' +
        '<p class="leaderboardHintText">Maximum image weight should be 100 kb.</p>' +
        '<p class="leaderboardHintText">Allowed format (swf, HTML5, jpg, png). </p>' +
    '</div>' +

    '<div class="btnBox clearfix">' +
        '<button class="btn submitAddNewInterstitial">Create</button>' +
        '<button class="btn I cancelAddInterstitialBtn">Cancel</button>' +
    '</div>' +
'</div>' ,
    editAirline :  '<div style="display:block" class="interstitialPopup globalPopup default opened editPopUp">' +
    '<h2 class="popupTitle leaderboardTitle">Add Leaderboard Banner</h2>' +
    '<h2 class="popupTitle defaultTitle addAirlinePopUpText">Edit Airline</h2>' +

    '<div class="popupRow fileNameRow clearfix">' +
        '<label class="labelTitle">Airline Code</label>' +
        '<input type="text" name="uploadFileNameInput" class="uploadFileNameInput airlineCodeInput" placeholder="Airline Code" disabled>' +
    '</div>' +

    '<div class="popupRow fileNameRow clearfix">' +
        '<label class="labelTitle">Airline Name</label>' +
        '<input id="airlineName" type="text" name="uploadFileNameInput" class="uploadFileNameInput airlineNameInput" placeholder="Airline Name" disabled>' +
    '</div>' +

    '<h2 class="popupLogoUpdatingTitle defaultTitle addAirlinePopUpText">Logo Updating</h2>' +

    '<div class="popupRow intRow clearfix">' +
        '<div class="interstitialUploadBox">' +
            '<header class="clearfix">' +
                '<label class="uploadBtn">' +
                    '<input type="file" name="file" class="interstitialUploadInput" data-image-name="">' +
                '</label>' +
                '<h6 class="intImageTitle">' +
                    '<span class="defaultAnimationText">Flight Logo</span>' +
                    '<span class="leaderboardBannerText">Leaderboard Banner</span>' +
                '</h6>' +
            '</header>' +
            '<figure class="logoImgBox">' +
                '<img src="#" class="interstitialImg" alt="Logo">' +
                '<object class="logoObject" data=""></object>' +
            '</figure>' +
        '</div>' +
    '</div>' +

    '<div class="hintBox">' +
        '<p class="defaultHintText">Image dimensions must be 70px x 45px.</p>' +
        '<p class="defaultHintText">Maximum image weight should be 70 kb.</p>' +
        '<p class="defaultHintText">Allowed format png. </p>' +
        '<p class="leaderboardHintText">Image dimensions must be 728px x 90px.</p>' +
        '<p class="leaderboardHintText">Maximum image weight should be 100 kb.</p>' +
        '<p class="leaderboardHintText">Allowed format (swf, HTML5, jpg, png). </p>' +
    '</div>' +

    '<div class="popupRow intRow clearfix">' +
        '<div class="interstitialUploadBox">' +
            '<header class="clearfix">' +
                '<label class="uploadBtn">' +
                    '<input type="file" name="file" class="interstitialUploadInput" data-image-name="">' +
                '</label>' +
                '<h6 class="intImageTitle">' +
                    '<span class="defaultAnimationText">Matrix Logo</span>' +
                    '<span class="leaderboardBannerText">Leaderboard Banner</span>' +
                '</h6>' +
            '</header>' +
            '<figure class="logoImgBox">' +
                '<img src="#" class="interstitialImg" alt="Logo">' +
                '<object class="logoObject" data=""></object>' +
            '</figure>' +
        '</div>' +
    '</div>' +

    '<div class="hintBox">' +
        '<p class="defaultHintText">Image dimensions must be 58px x 33px.</p>' +
        '<p class="defaultHintText">Maximum image weight should be 70 kb.</p>' +
        '<p class="defaultHintText">Allowed format gif. </p>' +
        '<p class="leaderboardHintText">Image dimensions must be 728px x 90px.</p>' +
        '<p class="leaderboardHintText">Maximum image weight should be 100 kb.</p>' +
        '<p class="leaderboardHintText">Allowed format (swf, HTML5, jpg, png). </p>' +
    '</div>' +

    '<div class="btnBox clearfix">' +
        '<button class="btn saveChangesAddNewInterstitial">Save Changes</button>' +
        '<button class="btn I cancelAddInterstitialBtn">Cancel</button>' +
    '</div>' +
'</div>',
    addNewAirlineRow : '<tr>' +
    '<td class="airlineCode" rowspan="2"></td>' +
    '<td class="airlineName" rowspan="2"></td>' +
    '<td class="flightLogo" rowspan="2"></td>' +
    '<td class="matrixLogo" rowspan="2"></td>' +
    '<td class="editBtnCell">' +
        '<button class="editBtn editBtnCellNewlyCreated"></button>' +
    '</td>' +
    '</tr>' +
    '<tr>' +
    '<td class="removeBtnCell">' +
        '<button class="removeBtn"></button>' +
    '</td>' +
    '</tr>'
}

$(document).ready(function(){
    //listener on addNewAirline btn

    $('.addNewInterstitialBtn').on('click', function(event){
        showAddNewAirlinePopUp();
        console.log('addnewairline clicked')
    })

    $('.editBtn').on('click', function(event){
        showEditPopUp();
        console.log('edit clicked')
    })

    function showAddNewAirlinePopUp(){
        $('.pageContentSection.clearfix').after(temlsObj.addNewAirline);
        
        $('.submitAddNewInterstitial').on('click', function(event){
            console.log('create clicked');
            addNewAirlineRow();
            $('.interstitialPopup.globalPopup.default.opened').remove();
        })

        $('.cancelAddInterstitialBtn').on('click', function(event){
            $('.interstitialPopup.globalPopup.default.opened').remove();
            console.log('cancel clicked')
        })
    }

    function addNewAirlineRow(){
        $('.addNewAirlineTableBody').append(temlsObj.addNewAirlineRow);
        var airlineCodeInput = $('.airlineCodeInput').val();
        var airlineNameInput = $('.airlineNameInput').val();
        $('.airlineCode').last().text(airlineCodeInput);
        $('.airlineName').last().text(airlineNameInput);
        $('.editBtnCellNewlyCreated').last().on('click', function(event){
            showEditPopUp();
            console.log('edit clicked newly created')
        });
        $('.removeBtnCell').last().on('click', function(event){
            console.log('remove clicked');
            var removeBtn = $(event.target);
            removeBtn.closest('tr').prev().remove();
            removeBtn.closest('tr').remove();
        })
    }

    function showEditPopUp(){
        if(event.target.classList.contains('genericEdit')){
            $('.pageContentSection.clearfix').after(temlsObj.editAirline);
            setEvents(); 
        } else if(event.target.classList.contains('editBtnCellNewlyCreated')){
            $('.pageContentSection.clearfix').after(temlsObj.editAirline);
            $('#airlineName').attr("disabled", false);
            //setEvents(); 

            var target = $(event.target);
            var airlineCode = target.closest('tr').find('.airlineCode').html();
            var airlineName = target.closest('tr').find('.airlineName').html(); 
            $('.airlineCodeInput').val(airlineCode);
            $('.airlineNameInput').val(airlineName);

            $('.saveChangesAddNewInterstitial').on('click', function(event){
                console.log('save changes clicked');
                
                
                target.closest('tr').find('.airlineName').html($('.airlineNameInput').val());
                $('.interstitialPopup.globalPopup.default.opened').remove();
            })
    
            $('.cancelAddInterstitialBtn').on('click', function(event){
                $('.interstitialPopup.globalPopup.default.opened').remove();
                console.log('cancel clicked')
            })

           
        } else {
            $('.pageContentSection.clearfix').after(temlsObj.editAirline);
            $('.interstitialPopup').find('.popupRow.intRow.clearfix').first().addClass('popUpRowOne');
            $('.interstitialPopup').find('.hintBox').first().addClass('popUpRowOne');
            setEvents(); 
        }
        
    }

    function setEvents(){
        $('.saveChangesAddNewInterstitial').on('click', function(event){
            console.log('save changes clicked');
            $('.interstitialPopup.globalPopup.default.opened').remove();
        })

        $('.cancelAddInterstitialBtn').on('click', function(event){
            $('.interstitialPopup.globalPopup.default.opened').remove();
            console.log('cancel clicked')
        })
    }
})
