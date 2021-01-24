// conditional field appearance function
$(document).ready(function() {
    $($( "div[data-field-name*='mx_Other_Higher_Educational_Qualifications']" )).css("display", "none");
    $($( "div[data-field-name*='mx_Other_Field_of_Specialization']" )).css("display", "none");
});

$( "#mx_Highest_Education_Qualification" ).click(function() {
    var heq = document.getElementById("mx_Highest_Education_Qualification");
    var selectedValue = heq.options[heq.selectedIndex].value;
    if (selectedValue == "Other"){
        $($( "div[data-field-name*='mx_Other_Higher_Educational_Qualifications']" )).css("display", "block");
    }
    else{
        $($( "div[data-field-name*='mx_Other_Higher_Educational_Qualifications']" )).css("display", "none");
    }
});

$( "#mx_Field_of_Specialization" ).click(function() {
    var fos = document.getElementById("mx_Field_of_Specialization");
    var selectedValue = fos.options[fos.selectedIndex].value;
    if (selectedValue == "Other"){
        $($( "div[data-field-name*='mx_Other_Field_of_Specialization']" )).css("display", "block");
    }
    else{
        $($( "div[data-field-name*='mx_Other_Field_of_Specialization']" )).css("display", "none");
    }
});
