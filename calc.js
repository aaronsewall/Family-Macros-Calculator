// Update Body Composition fields
function updateBodyComposition() {
    //rfl = Rapid Fat Loss Diet
    // choose lbs or kg radio button
    //var male = true;
    //var female = false;

    var weightlbs = document.getElementById("weightlbs");
    var height = document.getElementById("height");
    var g;
    var gendertext = document.getElementById("gender").value;
    if (gendertext == "Male") {
        g = true;
    } else if (gendertext == "Female") {
        g = false;
    }

    // var weightkg;
    var tempbodyfat = document.getElementById("bodyfat");

    if (tempbodyfat === "") {
        //                calculatebodyfat??
        var bodyfat; // takes input if known, otherwise calculate
    }

    //weightlbs, height
    var bmi = 703.069579639159 * weightlbs / (Math.pow(height, 2));
    document.getElementById("bmi").innerHTML = bmi;

    //bmi
    var bmi_class;
    if (bmi <= 18.5) {
        bmi_class = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25.0) {
        bmi_class = "Normal";
    } else if (bmi >= 25.0 && bmi < 30.0) {
        bmi_class = "Overweight";
    } else if (bmi >= 30.0 && bmi < 35.0) {
        bmi_class = "Obese";
    } else if (bmi >= 35.0 && bmi < 40.0) {
        bmi_class = "Severely Obese";
    } else if (bmi >= 40.0 && bmi < 45.0) {
        bmi_class = "Morbidly Obese";
    } else if (bmi >= 45.0) {
        bmi_class = "Super Obese";
    }

    document.getElementById("bmi_class").innerHTML = bmi_class;

    var estbodyfat;
    // lyle's bf
    var rflcategory;
    if ((estbodyfat <= 0.15 && g) || (estbodyfat < 0.25 && !g)) {
        rflcategory = 1;
    } else if ((estbodyfat <= 0.26 && g) || (estbodyfat < 0.35 && !g)) {
        rflcategory = 2;
    } else {
        rflcategory = 3;
    }
    document.getElementById("rflcategory").innerHTML = rflcategory;
}

function ideal_weight() {
    //input height, weightlbs, wrist, gender, forearm
    // allow manual input, otherwise calculate
    var idealweight = null;

    var heightdiff = (height < 60) ? 0 : (height - 60);
    var ymca = g ? (-98.42 + 4.15 * waist - 0.082 * weight) / weight : (-76.76 + 4.15 * waist - 0.082 * weight) / weight;
    var mod_ymca = g ? (-0.082 * weightlbs + 4.15 * waist) / weightlbs * 100 : (0.268 * weightlbs - 0.318 * wrist + 0.157 * waist + 0.245 * hip - 0.434 *
        forearm - 8.987) / weightlbs * 100;
    var robinson = g ? 114.640396 + 4.1887837 * heightdiff : 108.026527 + 3.7478591 * heightdiff;
    var miller = g ? 123.8998126 + 3.10851843 * heightdiff : 117.0654813 + 2.99828728 * heightdiff;
    var hamwi = g ? 105.821904 + 5.9524821 * heightdiff : 100.3103465 + 4.8501706 * heightdiff;
    var devine = g ? 110.23115 + 5.0706329 * heightdiff : 100.3103465 + 5.0706329 * heightdiff;

    var bmiweightlbslow = 18.5 * (Math.pow(height, 2)) / 703.069579639159;
    var bmiweightlbshigh = 25 * (Math.pow(height, 2)) / 703.069579639159;
    var bmiweightlbsavg = (bmiweightlbslow + bmiweightlbshigh) / 2;

    document.getElementById("bmiweightlbslow").innerHTML = bmiweightlbslow;
    document.getElementById("bmiweightlbshigh").innerHTML = bmiweightlbshigh;
    document.getElementById("bmiweightlbsavg").innerHTML = bmiweightlbsavg;
    document.getElementById("robinson").innerHTML = robinson;
    document.getElementById("miller").innerHTML = miller;
    document.getElementById("hamwi").innerHTML = hamwi;
    document.getElementById("devine").innerHTML = devine;
    document.getElementById("ymca").innerHTML = ymca;
    document.getElementById("mod_ymca").innerHTML = mod_ymca;

    var tolose = weightlbs - idealweight;
}

function pics() {

    var frontpic;
    var backpic;
    var leftsidepic;
    var rightsidepic;
}

function max_muscular_bw() {
    // input height, weight, ankle, bodyfat, wrist

    function max_weight(desiredbf) {
        return (Math.pow(height, 1.5) * (Math.sqrt(wrist) / 22.6670 + Math.sqrt(ankle) / 17.0104) * (desiredbf / 224 + 1)) / lbm;
    }

    var desiredbf;
    var lbm = 1 - (desiredbf / 100);

    // clean this up
    var weight_max_8 = max_weight(8);
    var bulkweight_8 = weight_max_8 * 1.04;
    var weight_max_10 = max_weight(10);
    var bulkweight_10 = weight_max_10 * 1.04;
    var weight_max = max_weight(desiredbf);
    var bulkweight = weight_max * 1.04;

    var chest_max = 1.6817 * wrist + 1.3759 * ankle + 0.3314 * height;
    var biceps_max = 1.2033 * wrist + 0.1236 * height;
    var forearms_max = 0.9626 * wrist + 0.0989 * height;
    var neck_max = 1.1424 * wrist + 0.1236 * height;
    var thigh_max = 1.3868 * ankle + 0.1805 * height;
    var calves_max = 0.9298 * ankle + 0.1210 * height;

    document.getElementById("weight_max").innerHTML = weight_max;
    document.getElementById("bulkweight").innerHTML = bulkweight;
    document.getElementById("weight_max_8").innerHTML = weight_max_8;
    document.getElementById("bulkweight_8").innerHTML = bulkweight_8;
    document.getElementById("weight_max_10").innerHTML = weight_max_10;
    document.getElementById("bulkweight_10").innerHTML = bulkweight_10;
    document.getElementById("chest_max").innerHTML = chest_max;
    document.getElementById("biceps_max").innerHTML = biceps_max;
    document.getElementById("forearms_max").innerHTML = forearms_max;
    document.getElementById("neck_max").innerHTML = neck_max;
    document.getElementById("thigh_max").innerHTML = thigh_max;
    document.getElementById("calves_max").innerHTML = calves_max;



    //validation
    if ((height > 84) || (height < 60)) {
        alert("I'm sorry, you must enter a height between 60 and 84 inches");
        return false;
    }
    if ((ankle > 12.3) || (ankle < 6.8)) {
        alert("I'm sorry, you must enter an ankle circumference between 6.8 and 12.3 inches");
        return false;
    }
    if ((wrist > 10) || (wrist < 5.2)) {
        alert("I'm sorry, you must enter a wrist circumference between 5.2 and 10 inches");
        return false;
    }
    if ((bodyfat > 25.0) || (bodyfat < 4.5)) {
        alert("I'm sorry, you must enter a bodyfat percentage between 4.5% and 20.0%");
        return false;
    }
}


function strengthStandards() {
    // input weight lbs

    var mylifts = new Array(8);
    var myExcercises = new Array(4);

    //male
    var lift = [heading, squat, bench_press, deadlift, standing_military_press, leg_press, bent_over_row, ez_bicep_curl, skull_crusher];
    var exercise = [push_ups, dips, pull_ups, elbow_plank];




    lift.heading = ["Exercise", "Your lift", "Grade", "Decent", "Good", "Great", "Decent*X", "Good*X", "Great*X"];
    lift.squat = g ? [1.5, 2, 2.5] : [0.75, 1.25, 2];
    lift.bench_press = g ? [1.25, 1.5, 2] : [0.5, 0.75, 1];
    lift.deadlift = g ? [1.5, 2, 2.75] : [1, 1.5, 2];
    lift.standing_military_press = g ? [0.5, 0.8, 1] : [0.2, 0.3, 0.45];
    lift.leg_press = g ? [1.95, 3.4, 4.75] : [0.85, 1.7, 2.1];
    lift.bent_over_row = g ? [1, 1.3, 1.5] : [0.3, 0.5, 0.65];
    lift.ez_bicep_curl = g ? [0.4, 0.65, 0.85] : [0.2, 0.35, 0.4];
    lift.skull_crusher = g ? [0.35, 0.55, 0.7] : [0.15, 0.2, 0.25];
    //fixed - no weight multiplier
    exercise.push_ups = g ? [30, 60, 90] : [5, 25, 50];
    exercise.dips = g ? [20, 40, 60] : [1, 15, 30];
    exercise.pull_ups = g ? [10, 20, 30] : [1, 5, 12];
    exercise.elbow_plank = [90, 180, 300]; //seconds

    /*
    var myTableDiv = document.getElementById("metric_results")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')

    table.border = '1'
    table.appendChild(tableBody);



    var stock = new Array()
    stock[0] = new Array("Cars", "88.625", "85.50", "85.81", "987")
    stock[1] = new Array("Veggies", "88.625", "85.50", "85.81", "988")
    stock[2] = new Array("Colors", "88.625", "85.50", "85.81", "989")
    stock[3] = new Array("Numbers", "88.625", "85.50", "85.81", "990")
    stock[4] = new Array("Requests", "88.625", "85.50", "85.81", "991")

    //TABLE COLUMNS
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (i = 0; i < heading.length; i++) {
    var th = document.createElement('TH')
    th.width = '75';
    th.appendChild(document.createTextNode(heading[i]));
    tr.appendChild(th);
    }

    //TABLE ROWS
    for (i = 0; i < stock.length; i++) {
    var tr = document.createElement('TR');
    for (j = 0; j < stock[i].length; j++) {
    var td = document.createElement('TD')
    td.appendChild(document.createTextNode(stock[i][j]));
    tr.appendChild(td)
    }
    tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)



    */

    // for loop iterate through and print chart for strength standards

    // allow input of current lifts and return

    // pretty... really - based on median

}


function bf_target(percentage) {
    //input height, bf_percentage
    //men
    targetweight = g ? 0.01801623 * Math.pow(height, 2) + 0.09482229 * percentage * Math.pow(height, 2) : 0.00568933 * Math.pow(height, 2) + 0.09482229 *
        percentage * Math.pow(height, 2);

}

function bmi_target(target_bmi) {
    //input height, target bmi
    var targetweight = 0.00142233 * target_bmi * Math.pow(height, 2);
}

function Goals() {
    //women


    var ideal_weight;

    //women
    var bf_13 = bf_target(13);
    var bf_21 = bf_target(21);
    var bf_24 = bf_target(24);
    var bf_34 = bf_target(34);
    //men
    var bf_10 = bf_target(10);
    var bf_15 = bf_target(15);
    var bf_20 = bf_target(20);
    var bf_25 = bf_target(25);

    var bmi_185 = bmi_target(18.5);
    var bmi_25 = bmi_target(25);
    var bmi_30 = bmi_target(30);
    var bmi_35 = bmi_target(35);
    var bmi_40 = bmi_target(40);
    var bmi_45 = bmi_target(45);



    //Lyle's Stuff
    var Category; // 1, 2 ,3

    var lbm_g_prot;
    var category1 = [1, 1.25, 1.5, 2.0];
    var category2 = [0.9, 1.1, 1.25];
    var category3 = [0.8, 0.9, 1];

    var activitylevel = [inactive, aerboic, weight_lifting];
    var fulldietbreak = ["11-12 days", "every 2-6 weeks", "every 6-12 weeks"];
    var freemeal = [0, 1, 2];
}

function measurements() {

    var flexed = document.getElementById("flexed");

    var neck = document.getElementById("neck");
    var chest = document.getElementById("chest");
    var shoulder = document.getElementById("shoulder");
    var arms = document.getElementById("arms");
    var forearms = document.getElementById("forearms");
    var hip = document.getElementById("hip");
    var waist = document.getElementById("waist");
    var thigh = document.getElementById("thigh");
    var calves = document.getElementById("calves");
    var wrist = document.getElementById("wrist");
    var ankle = document.getElementById("ankle");
}

function capliper_measurments() {
    var chest_caliper = document.getElementById("chest_caliper");
    var abs_caliper = document.getElementById("abs_caliper");
    var thigh_caliper = document.getElementById("thigh_caliper");
    var biceps_caliper = document.getElementById("biceps_caliper");
    var triceps_caliper = document.getElementById("triceps_caliper");
    var subscapula_caliper = document.getElementById("subscapula_caliper");
    var suprailiac_caliper = document.getElementById("suprailiac_caliper");
    var lower_back_caliper = document.getElementById("lower_back_caliper");
    var midaxilla_caliper = document.getElementById("midaxilla_caliper");
    var quadriceps_caliper = document.getElementById("quadriceps_caliper");
    var calves_caliper = document.getElementById("calves_caliper");
}


function bodyfat() {
    // input lbs, gender, age, weight
    // caliper measurements
    function siri(bonedensity) {
        return ((495 / bodydensity) - 450);
    }
    var age;


    //male
    //input calipers only
    var jp3_sum_men = chest_caliper + abs_caliper + thigh_caliper;
    var jp3_sum_women = triceps_caliper + suprailiac_caliper + thigh_caliper;
    var jp4_sum = abs_caliper + triceps_caliper + thigh_caliper + suprailiac_caliper;
    var jp7_sum = chest_caliper + midaxilla_caliper + triceps_caliper + subscapula_caliper + abs_caliper + suprailiac_caliper + thigh_caliper;
    var jackson_pollock_3 = g ? siri(1.10938 - (0.0008267 * jp3_sum_men) + (0.0000016 * Math.pow(jp3_sum_men, 2)) - (0.0002574 * age)) : ((0.41563 *
        jp3_sum_women) - (0.00112 * Math.pow(jp3_sum_women, 2)) + (0.03661 * age) + 4.03653);
    var jackson_pollock_4 = g ? (0.29288 * jp4_sum) - (0.0005 * Math.pow(jp4_sum, 2)) + (0.15845 * age) - 5.76377 : (0.29669 * jp4_sum - (0.00043 * Math.pow(
        jp4_sum, 2)) + (0.02963 * age) + 1.4072);
    var jackson_pollock_7 = g ? siri(1.112 - (0.00043499 * jp7_sum) + (0.00000055 * Math.pow(jp7_sum, 2)) - (0.00028826 * age)) : siri((1.097 - (0.00046971 *
        jp7_sum) + (0.00000056 * Math.pow(jp7_sum, 2)) - (0.00012828 * age)));
    var parillo = (((chest_caliper + abs_caliper + thigh_caliper + biceps_caliper + triceps_caliper + subscapula_caliper + suprailiac_caliper +
        lower_back_caliper + calves_caliper) * 27) / weightlbs);

    function durnin_womersley() {
        var dw_logsum = Math.log(triceps_caliper + biceps_caliper + subscapula_caliper + suprailiac_caliper);
        var bonedensity;
        if (age < 17)
            bodydensity = g ? 1.1533 - (0.0643 * dw_logsum) : 1.1369 - (0.0598 * dw_logsum);
        else if (age >= 17 && age <= 19)
            bodydensity = g ? 1.1620 - (0.0630 * dw_logsum) : 1.1549 - (0.0678 * dw_logsum);
        else if (age >= 20 && age <= 29)
            bodydensity = g ? 1.1631 - (0.0632 * dw_logsum) : 1.1599 - (0.0717 * dw_logsum);
        else if (age >= 30 && age <= 39)
            bodydensity = g ? 1.1422 - (0.0544 * dw_logsum) : 1.1423 - (0.0632 * dw_logsum);
        else if (age >= 40 && age <= 49)
            bodydensity = g ? 1.1620 - (0.0700 * dw_logsum) : 1.1333 - (0.0612 * dw_logsum);
        else if (age >= 50)
            bodydensity = g ? 1.1715 - (0.0779 * dw_logsum) : 1.1339 - (0.0645 * dw_logsum);
        var durnin_womersley = siri(bonedensity);
    }
    //navy - tape measure, height, neck, men abs, women waist and hips
    var navy_bf = g ? 86.010 * Math.log10(abs - neck) - 70.041 * Math.log10(height) + 36.76 : 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(
        height) - 78.387;

    var lyle_est = g ? ((bmi - 13) * 1.5 + 0.5) / 100 : ((bmi - 4) * 1.5) / 100;

    var bf_sum = (jackson_pollock_3 + jackson_pollock_4 + jackson_pollock_7 + parillo + durnin_womersley + navy_bf);
    var bf_avg = bf_sum / 6;
    var median = Math.median(bf_sum);

    document.getElementById("jackson_pollock_3").innerHTML = jackson_pollock_3;
    document.getElementById("jackson_pollock_4").innerHTML = jackson_pollock_4;
    document.getElementById("jackson_pollock_7").innerHTML = jackson_pollock_7;
    document.getElementById("parillo").innerHTML = parillo;
    document.getElementById("durnin_womersley").innerHTML = durnin_womersley;
    document.getElementById("navy_bf").innerHTML = navy_bf;
    document.getElementById("lyle_est").innerHTML = lyle_est;
    document.getElementById("bf_avg").innerHTML = bf_avg;
    document.getElementById("median").innerHTML = median;



    var leanlbs = ((weightlbs * (100 - bodyfat)) / 100);
    var leankg = ((weightkg * (100 - bodyfat)) / 100);
    var bmr = (370 + (21.6 * leankg));
    var tef = (bmr * 0.1);
    var bmrtef = (bmr + tef);
    document.getElementById("bmr").innerHTML = bmr;

    var weightcalmin = (weightkg * 0.1);

    // bmrtef*multiplier
    var kgactivitylevel;

    var sedentary = 1.00;
    var lightly_active = g ? 1.11 : 1.12;
    var moderately_active = g ? 1.25 : 1.27;
    var very_active = g ? 1.48 : 1.45;


}

// Update Exercise Info Table
function updateExercise() {
    var weightkg;

    var weightmins;
    var cardiomins;
    var othermins;

    var weightcalmin = weightkg * 0.1;
    var cardiocalmin;
    var othercalmin;




    var weightcaltot = weightmins * weightcalmin;

    var cardiocaltot = cardiomins * cardiocalmin;

    var othercaltot = othermins * othercalmin;

    var burnttot = weightcaltot + cardiocaltot + othercaltot;


}

// Set recommended calorie deficit
function updateCalorieDeficit() {
    var caldeficit = 10;

    if (bodyfat >= 30) {
        caldeficit = 25;
    } else if (bodyfat >= 20) {
        caldeficit = 20;
    } else if (bodyfat >= 15) {
        caldeficit = 15;
    }
}

// Set recommended calorie deficit
function updateCalorieSurplus() {
    var calsurplus = 10;

    if (bodyfat >= 30) {
        calsurplus = 0;
    } else if (bodyfat >= 20) {
        calsurplus = 2;
    } else if (bodyfat >= 15) {
        calsurplus = 5;
    }
}

// Update calories stats
function updateCalories() {
    var tdee;
    var tdee_exercise = tdee + burnttot;

    var lose1 = (tdee * ((100 - caldeficit) / 100));
    var maintain1 = (tdee);
    var gain1 = (tdee);

    var lose2 = tdee_exercise * ((100 - caldeficit) / 100);
    var maintain2 = (tdee_exercise);
    var gain2 = tdee_exercise * ((100 + calsurplus) / 100);


    // Ensure table is refreshed
    updateMacros();

    var proteinCarbCals = proteincals + carbcals;
    var fatmacro = 116;
    var totalcals = lose1;

    var goal = $('input[name=goal]:checked');
    if (goal == 'lose') {
        totalcals = lose1;
    }
    if (goal == 'maintain') {
        totalcals = maintain1;
    }
    if (goal == 'gain') {
        totalcals = gain1;
    }
    fatmacro = ((totalcals - proteinCarbCals) / 9);

    console.log(goal + '->' + proteinCarbCals + ' / ' + totalcals + ' / ' + fatmacro);
}

// Update macros
function updateMacros() {

    if ($('#kgrecommended').prop('checked')) {
        proteinmacro = (leanlbs * 1.0);
    } else {
        proteinmacro = (leanlbs * ratio);
    }
    var carbmacro;
    var fatmacro;

    var proteinmacro;

    var proteincals = (4 * proteinmacro);
    var carbcals = (4 * carbmacro);
    var fatcals = (9 * fatmacro);
    //0.8, 1.2, 1.0, ketogains suggested
    var totalcals = (proteincals) + (carbcals) + (fatcals);

    var proteinpercent = (proteincals / totalcals * 100);
    var carbpercent = (carbcals / totalcals * 100);
    var fatpercent = (fatcals / totalcals * 100);

    var totalpercent = (proteinpercent) + (carbpercent) + (fatpercent);


}