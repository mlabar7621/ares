$(document).ready(function () {
    const json = '{ "fruit": "pineapple", "fingers": 10 }';
    const obj = JSON.parse(json);
    console.log("fruit is:" + obj.fruit, "fingers:" + obj.fingers);


    var main = new Vue({
        el: '#main',
        data: {
            categories: [
                {
                    name: 'Payroll and Human Resources',
                    cards: [
                        {
                            title: 'PHR Time Entry/Leave  Reporting',
                            url: 'https://phr.umd.edu/phrtimeentrymenu/menu',
                            image:'timeentry.png',
                            alt: 'Go to PHR Web Application to submit a timesheet/leave report'
                        },
                        {
                            title: 'PHR Transactional System',
                            url: 'https://ares.umd.edu/phr/',
                            image:'KualiTime.png',
                            alt: 'Go to PHR Transactional system'
                        },
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'}
                    ]
                },

                {
                    name: 'Department of Business Services',
                    cards: [
                        {
                            title: 'PHR Time Entry/Leave  Reporting',
                            url: 'https://phr.umd.edu/phrtimeentrymenu/menu',
                            image:'timeentry.png',
                            alt: 'Go to PHR Web Application to submit a timesheet/leave report'
                        },
                        {
                            title: 'PHR Transactional System',
                            url: 'https://ares.umd.edu/phr/',
                            image:'KualiTime.png',
                            alt: 'Go to PHR Transactional system'
                        },
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'},
                        {title: 'PHR Time Entry/Leave  Reporting', url: 'https://phr.umd.edu/phrtimeentrymenu/menu', image:'timeentry.png', alt: 'Go to PHR Web Application to submit a timesheet/leave report'}
                    ]

                },
                { name: 'Effort Reporting' }
            ]
        }
    })
	
});
				  
