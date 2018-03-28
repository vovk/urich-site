(function () {
    let counter_place1 = document.querySelector('.counter1');
    let counter_place2 = document.querySelector('.counter2');
    let counter_place3 = document.querySelector('.counter3');

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    function CounterWidget() {
        // count1++;
        // if (count1 < 181) {
        //     counter_place1.innerHTML = count1;
        // }

        count2++;
        if (count2 < 25) {
            counter_place2.innerHTML = count2;
        }

        count3++;
        if (count3 < 5) {
            counter_place3.innerHTML = count3;
        }
    }

    setInterval(CounterWidget, 50);

})();

