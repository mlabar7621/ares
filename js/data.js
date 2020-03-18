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
                        {
                            title: 'I9 Complete',
                            url: 'https://shib.idm.umd.edu/shibboleth-idp/profile/SAML2/Unsolicited/SSO?providerId=http%3A%2F%2Fi9complete.com%2Fsso',
                            image:'KualiTime.png',
                            alt: 'Go to I9 Complete'
                        },
						{
                            title: 'Bi-Weekly Earnings Statement',
                            url: 'https://phr.umd.edu/phrearningstatement/earningstatement',
                            image:'KualiTime.png',
                            alt: 'Go to Bi-Weekly Earnings Statement'
                        },
						{
                            title: 'Access Personal PHR Information',
                            url: 'https://phr.umd.edu/phrdataverification/dataverif?action=dataverif',
                            image:'KualiTime.png',
                            alt: 'Go to Personal PHR Information'
                        },
						{
                            title: 'Outside Professional Activity (OPA) Report',
                            url: 'https://far.umd.edu/far',
                            image:'KualiTime.png',
                            alt: 'Go to Outside Professional Activity (OPA) Report'
                        },
						{
                            title: 'PHR Corrections',
                            url: 'https://phr.umd.edu/phrCorrectionsweb/Corrections?action=selsec',
                            image:'KualiTime.png',
                            alt: 'Go to PHR Corrections'
                        },
						{
                            title: 'Applicant/Position System(eTerp2)',
                            url: 'https://ejobs.umd.edu/hr/',
                            image:'KualiTime.png',
                            alt: 'Go to Applicant/Position System(eTerp2)'
                        },
						{
                            title: 'UHR Website',
                            url: 'http://www.uhr.umd.edu/',
                            image:'KualiTime.png',
                            alt: 'Go to UHR Website'
                        }
                    ]
                },
                {
                    name: 'Department of Business Services',
                    cards: 
					[
                        {
                            title: 'DBS Home Page',
                            url: 'http://www.dbs.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Go to DBS Home Page'
                        },
                        {
                            title: 'CARS System',
                            url: 'http://www.cars.umd.edu/cars/',
                            image:'KualiTime.png',
                            alt: 'Go to CARS System'
                        },
						{
                            title: 'Travel Card Mgmt System',
                            url: 'https://tcard.umd.edu/',
                            image:'KualiTime.png',
                            alt: 'Go to Travel Card Mgmt System'
                        },
						{
                            title: 'Meter Postage Bills',
                            url: 'https://bfs-trans1.umd.edu/meterweb/',
                            image:'KualiTime.png',
                            alt: 'Go to Meter Postage Bills'
                        },
						{
                            title: 'Copy Program',
                            url: 'https://copier.umd.edu/',
                            image:'KualiTime.png',
                            alt: 'Go to Copy Program'
                        },
                    ]

                },
				{
                name: 'Procurement',
                    cards: [
                        {
                            title: 'PROcurement WEB System',
                            url: 'https://bfs-lookup1.umd.edu/proweb',
                            image:'timeentry.png',
                            alt: 'PROcurement WEB System'
                        },
						{
                            title: 'Procurement Card Management System',
                            url: 'https://pcard.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Procurement Card Management System'
                        },
						{
                            title: 'Procurement and Supply Home Page',
                            url: 'http://www.purchase.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Procurement and Supply Home Page'
                        },
						{
                            title: 'Procurement Card Home Page',
                            url: 'http://www.purchase.umd.edu/pcard.html',
                            image:'timeentry.png',
                            alt: 'Procurement Card Home Page'
                        }
							]
				},
				{
                name: 'Personal Services',
                    cards: [
                        {
                            title: 'Web URL Change',
                            url: 'https://ntst.umd.edu/urlchange',
                            image:'timeentry.png',
                            alt: 'Go to Web URL Change'
                        },
						{
                            title: 'Personnel Training',
                            url: 'http://www.training.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Go to Personnel Training'
                        },
						{
                            title: 'Campus Information',
                            url: 'https://www.umdrightnow.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Campus Information'
                        },
						{
                            title: 'Campus Map',
                            url: 'http://maps.umd.edu/map/',
                            image:'timeentry.png',
                            alt: 'Go to Campus Map'
                        },
						{
                            title: 'Campus Directory',
                            url: 'https://identity.umd.edu//search',
                            image:'timeentry.png',
                            alt: 'Go to Campus Directory'
                        }
							]
				},
				{
                name: 'Faculty Services',
                    cards: [
                        {
                            title: 'UMEG',
                            url: 'http://www.umeg.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Go to UMEG'
                        },
						{
                            title: 'CourseEvalUM',
                            url: 'https://www.courseevalum.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Go to CourseEvalUM'
                        },
						{
                            title: 'Faculty Info & Resources',
                            url: 'http://www.faculty.umd.edu/',
                            image:'timeentry.png',
                            alt: 'Go to Faculty Info & Resources'
                        },
						{
                            title: 'Faculty ID Service',
                            url: 'https://ares.umd.edu/home/facidser.html',
                            image:'timeentry.png',
                            alt: 'Go to Faculty ID Service'
                        }
							]
				},
				{
                name: 'Environmental Safety',
                    cards: [
                        {
                            title: 'Training',
                            url: 'https://www.essr.umd.edu/training',
                            image:'timeentry.png',
                            alt: 'Go to Training'
                        },
						{
                            title: 'Forms & Permits',
                            url: 'https://www.essr.umd.edu/forms',
                            image:'timeentry.png',
                            alt: 'Go to Forms & Permits'
                        },
						{
                            title: 'Supervisor´s Safety Responsibilities',
                            url: 'https://www.essr.umd.edu/supervisors-safety-responsibilities',
                            image:'timeentry.png',
                            alt: 'Go to Supervisor´s Safety Responsibilities'
                        }
							]
				},
				{
                name: 'Effort Reporting',
                    cards: 
					[
                        {
                            title: 'Administrator Access',
                            url: 'https://phr.umd.edu/phrA21Effortweb/A21Effort?action=selsec',
                            image:'timeentry.png',
                            alt: 'Go to Administrator Access'
                        },
						{
                            title: 'Faculty/Employee Access',
                            url: 'https://phr.umd.edu/phrA21Effortweb/A21Effort?action=employeesel',
                            image:'timeentry.png',
                            alt: 'Go to Faculty/Employee Access'
                        },
						{
                            title: 'Effort Certification Statement Effective 07/01/2012',
                            url: 'https://phr.umd.edu/phrA21Effortweb/docs/UMCP%20Effort%20Reporting%20Procedure%20Statemen%20eff07-01-2012-1.pdf',
                            image:'timeentry.png',
                            alt: 'Go to Effort Certification Statement'
                        },
						{
                            title: 'AReporting Procedures Effective 07/01/2012',
                            url: 'https://phr.umd.edu/phrA21Effortweb/docs/UMCP%20Effort%20Reporting%20Procedures%20eff07-01-2012-1.pdf',
                            image:'timeentry.png',
                            alt: 'Go to Reporting Procedures'
                        },
						{
                            title: 'Quick Reference Guide',
                            url: 'https://phr.umd.edu/phrA21Effortweb/docs/UMCP_Quick_Reference_Effort_Reporting-2.pdf',
                            image:'timeentry.png',
                            alt: 'Go to Quick Reference Guide'
                        }
					]
				},
				{
				name: 'Other',
					cards: 
						[
							{
							title: 'PHR Service Office & Registrar Reports',
							url: 'https://umd.service-now.com/itsupport?id=service&service=b93df83f3708c20041271f9543990e84&t=so&cat_id=d41580fc6f16e20051281ecbbb3ee4cb',
							image:'timeentry.png',
							alt: 'Go to PHR Service Office & Registrar Reports'
							},
							{
								title: 'UM3270',
								url: 'https://um3270.umd.edu/servlet',
								image:'timeentry.png',
								alt: 'UM3270'
							},
							{
								title: 'Student Award System',
								url: 'http://eso.umd.edu/osfa-ares/',
								image:'timeentry.png',
								alt: 'Student Award System'
							},
							{
								title: 'SIS Reports',
								url: 'https://app.testudo.umd.edu/sisreports',
								image:'timeentry.png',
								alt: 'Go to SIS Reports'
							},
							{
								title: 'Kuali Financial System (KFS)',
								url: 'http://kualifinancial.umd.edu/',
								image:'timeentry.png',
								alt: 'Go to Kuali Financial System (KFS)'
							},
													{
								title: 'Interface Reconciliation System',
								url: 'https://otc-2.umd.edu/irsweb/StartingIRS.jsp',
								image:'timeentry.png',
								alt: 'Go to Interface Reconciliation System'
							},
													{
								title: 'Financial Records System',
								url: 'https://otc-1.umd.edu/frsweb',
								image:'timeentry.png',
								alt: 'Go to Financial Records System'
							},
													{
								title: 'Electronic Forms',
								url: 'https://elf.umd.edu/elf',
								image:'timeentry.png',
								alt: 'Go to Electronic Forms'
							},
							{
								title: 'Data Administration',
								url: 'https://umd.service-now.com/itsupport?id=service&service=4f1aee7f37ae228041271f9543990ece',
								image:'timeentry.png',
								alt: 'Go to Data Administration'
							},
							{
								title: 'Budget and Fiscal Analysis',
								url: 'http://otcads.umd.edu/bfa/',
								image:'timeentry.png',
								alt: 'Go to Budget and Fiscal Analysis'
							},
							{
								title: 'Advisor Services',
								url: 'http://www.sis.umd.edu/catt',
								image:'timeentry.png',
								alt: 'Go to Advisor Services'
							}
						]
				}
            ]
        }
    })
	
});
				  
