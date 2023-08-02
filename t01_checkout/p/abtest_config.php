<?php

$abtest_config = [

	/**
	 * Email landing page AB tests [lukas]
	 */
	'email-signup-brief-insurance2' => [
		'variants' => [
			['email-signup-brief-insurance2', 30],
			['email-signup-brief-insurance3', 20],
			['email-signup-brief-insurance4', 20],
			['email-signup-brief-insurance5', 30]
		],
		'test_name' => 'insurance_2vs3vs4vs5final'
	],


    'payment-update' => [
		'variants' => [
			['payment-update-1', 100]
		],
		'test_name' => 'payment-update-1-full'
	],

	// Event template - panel discussion - online
	'july2021panel3o' => [
		'variants' => [
			['eventtemp-july2021panelonline', 100]
		],
		'test_name' => 'july2021panel3o--full_eventtemp-july2021panelonline_07.10.21'
	],

	// Event template - panel discussion - paid
	'july2021panel1s' => [
		'variants' => [
			['eventtemp-july2021panelsub', 100]
		],
		'test_name' => 'july2021panel1s--full_eventtemp-july2021panelsub_07.06.21'
	],

	// Event template - panel discussion
	'july2021panel2v' => [
		'variants' => [
			['eventtemp-july2021panelvip', 100]
		],
		'test_name' => 'july2021panel2v--full_eventtemp-july2021panelvip_07.06.21'
	],

	// Event template - event info
	'defendingamerica' => [
		'variants' => [
			['eventtemp-constitution', 100]
		],
		'test_name' => 'defendingamerica--full_eventtemp-constitution_06.29.21'
	],

	// Event template - documentary
	'americarewritten' => [
		'variants' => [
			['eventtemp-documetary', 100]
		],
		'test_name' => 'americarewritten--full_eventtemp-documetary_07.02.21'
	],

	// Honoring heroes
	'honorheroes' => [
		'variants' => [
			['honoring-heroes-month', 100]
		],
		'test_name' => 'honorheroes--full_honoring-heroes-month_05.29.21'
	],

	// Henry's template - Donation
	'legacy' => [
		'variants' => [
			['donatetemp-legacy1', 100]
		],
		'test_name' => 'legacy--full_donatetemp-legacy1_10.06.21'
	],

	// Meter general4
	// meter_1
	'meter_1' => [
		'variants' => [
			['digitemp-metergeneral4a1f4', 100]
		],
		'test_name' => 'meter_1--full_digitemp-metergeneral4a_10.3.20'
	],

	// meter_2
	'meter_2' => [
		'variants' => [
			['digitemp-metergeneral4b1f4', 100]
		],
		'test_name' => 'meter_2--full_digitemp-metergeneral4b_10.3.20'
	],

	// meter_3
	'meter_3' => [
		'variants' => [
			['digitemp-metergeneral4b1f4', 100]
		],
		'test_name' => 'meter_3--full_digitemp-metergeneral4b1f4_9.30.20'
	],

	// meter_4
	'meter_4' => [
		'variants' => [
			['digitemp-metergeneral4a1f4', 100]
		],
		'test_name' => 'meter_4--full_ digitemp-metergeneral4a1f4_9.30.20'
	],

	// meter_worldnews_white
	'meter_worldnews_white' => [
		'variants' => [
			['digitemp-metergeneral4a', 100]
		],
		'test_name' => 'meter_worldnews_white--full_digitemp-metergeneral4a_9.1.20'
	],

	// meter_worldnews_blue
	'meter_worldnews_blue' => [
		'variants' => [
			['digitemp-metergeneral4b', 100]
		],
		'test_name' => 'meter_worldnews_blue--full_digitemp-metergeneral4b_9.1.20'
	],

	// meter_worldnews_whitebutton
	'meter_worldnews_whitebutton' => [
		'variants' => [
			['digitemp-metergeneral4c', 100]
		],
		'test_name' => 'meter_worldnews_whitebutton--full_digitemp-metergeneral4c_9.1.20'
	],

	// meter_worldnews_old
	'meter_worldnews_old' => [
		'variants' => [
			['digitemp-metergeneral3', 100]
		],
		'test_name' => 'meter_worldnews_old--full_ digitemp-metergeneral3_9.1.20'
	],

	// meter_worldnews_premium
	'meter_worldnews_premium' => [
		'variants' => [
			['digitemp-metergeneral4a', 100]
		],
		'test_name' => 'meter_worldnews_premium--full_ digitemp-metergeneral4a_9.1.20'
	],
	
	// meter_usnews_white
	'meter_usnews_white' => [
		'variants' => [
			['digitemp-metergeneral4a', 100]
		],
		'test_name' => 'meter_usnews_white--full_digitemp-metergeneral4a_9.1.20'
	],

	// meter_usnews_blue
	'meter_usnews_blue' => [
		'variants' => [
			['digitemp-metergeneral4b', 100]
		],
		'test_name' => 'meter_usnews_blue--full_digitemp-metergeneral4b_9.1.20'
	],

	// meter_usnews_whitebutton
	'meter_usnews_whitebutton' => [
		'variants' => [
			['digitemp-metergeneral4c', 100]
		],
		'test_name' => 'meter_usnews_whitebutton--full_digitemp-metergeneral4c_9.1.20'
	],

	// meter_usnews_old
	'meter_usnews_old' => [
		'variants' => [
			['digitemp-metergeneral3', 100]
		],
		'test_name' => 'meter_usnews_old--full_ digitemp-metergeneral3_9.1.20'
	],

	// meter_usnews_premium
	'meter_usnews_premium' => [
		'variants' => [
			['digitemp-metergeneral4a', 100]
		],
		'test_name' => 'meter_usnews_premium--full_ digitemp-metergeneral4a_9.1.20'
	],
	
	// meter_premium
	'meter_premium' => [
		'variants' => [
			['digitemp-metergeneral4a', 100]
		],
		'test_name' => 'meter_premium--full_ digitemp-metergeneral4a_9.1.20'
	],
	
	// End Meter general4
	
	
	// AppStores redirects
	'mobile' => [
		'variants' => [
			['app01', 100]
		],
		'test_name' => 'mobile-app01'
	],

	// readepoch redirects

	'printsample' => [
		'variants' => [
			['printtemp-realnewsfisa2flc3', 100]
		],
		'test_name' => 'printsample--ab_printtemp-realnewsfisa2flc3_11.30.21'
	],

	// retarget
	'retarget' => [
		'variants' => [
			['printtemp-ytrealnewsvm2ndmthpop1h', 80],
			['printtemp-yt5realnewsvm', 20]
		],
		'test_name' => 'retarget--ab_printtemp-ytrealnewsvm2ndmthpop1h&yt5realnewsvm_8.19.20'
	],

	// retargetc
	'retargetc' => [
		'variants' => [
			['printtemp-ytccpvvm2c2ndmthpop1', 50],
			['printtemp-ytccpvvm2c2ndmthpop1h', 50]
		],
		'test_name' => 'retargetc--ab_printtemp-ytccpvvm2c2ndmthpop1&1h_7.30.20'
	],

	// retargetfisa
	'retargetfisa' => [
		'variants' => [
			['printtemp-ytfisa2ndmthpop2h', 80],
			['printtemp-yt5fisa', 20]
		],
		'test_name' => 'retargetfisa--ab_printtemp-ytfisa2ndmthpop2h&yt5fisa_8.19.20'
	],

	//email-digital-referral
	'email-digital-referral' => [
		'variants' => [
			['email-digital-referral_v2-pipa', 100]
		],
		'test_name' => 'email-digital-referral--full-email-digital-referral_v2-pipa_8.12.20'
	],

	//email-digital-referral
	'referral' => [
		'variants' => [
			['refdash02', 100]
		],
		'test_name' => 'referral--full-refdash02_02.11.21'
	],

	//new gateway journalism
	'journalism' => [
		'variants' => [
			['printtemp-ytfisa2ndmthpop2h', 100]
		],
		'test_name' => 'journalism--full_printtemp-ytfisa2ndmthpop2h_7.30.20'
	],

	//new gateway display
	'display' => [
		'variants' => [
			['printtemp-realnewsvm2pop1h', 100]
		],
		'test_name' => 'display--full_printtemp-realnewsvm2pop1h_8.3.20'
	],


	//new gateway fisa
	'fisa' => [
		'variants' => [
			['printtemp-ytfisa2ndmthpop2h', 100]
		],
		'test_name' => 'fisa--full_printtemp-ytfisa2ndmthpop2h_7.30.20'
	],


	//new gateway ccpv
	'ccpv' => [
		'variants' => [
			['printtemp-ytccpvvm2c2ndmthpop1', 50],
			['printtemp-ytccpvvm2c2ndmthpop1h', 50]
		],
		'test_name' => 'ccpv--ab_printtemp-ytccpvvm2c2ndmthpop1&1h_7.30.20'
	],


	//new gateway coronavirus
	'coronavirus' => [
		'variants' => [
			['printtemp-ytccpvvm2c2ndmthpop1', 50],
			['printtemp-ytccpvvm2c2ndmthpop1h', 50]
		],
		'test_name' => 'coronavirus--ab_printtemp-ytccpvvm2c2ndmthpop1&1ge_7.30.20'
	],

	// Bulk email marketing gateway
	'emailmk' => [
		'variants' => [
			['emailtemp-20free', 100]
		],
		'test_name' => 'emailmk--full_emailtemp-1mgift_3.4.20'
	],

	/**
	 * Print subscription landing page AB tests
	 */

	// Spygate gateway
	'spygate' => [
		'variants' => [
			['printtemp-ytsprealnewsvm2ndmthpop1h', 100]
		],
		'test_name' => 'spygate--full_ytsprealnewsvm2ndmthpop1h_7.30.20'
	],

	'search_01' => [
		'variants' => [
			['printtemp-ytrealnewsvm2ndmthpop1h', 100]
		],
		'test_name' => 'search_01--full_printtemp-ytrealnewsvm2ndmthpop1h_7.30.20'
	],

	// Inspired Meter gateway
	'meter_inspired' => [
		'variants' => [
			['digitemp-meterinspiredholiday2', 100]
		],
		'test_name' => 'inspiredmeter--full_meterinspiredholiday2'
	],

	// Inspired Meter gateway
	'inspired' => [
		'variants' => [
			['digitemp-inspiredholiday2', 100]
		],
		'test_name' => 'inspired--full_digitempinspiredholiday2'
	],

	// Search gateway
	'search' => [
		'variants' => [
			['printtemp-ytrealnewsvm2ndmthpop1h', 100]
		],
		'test_name' => 'search--full_printtemp-ytrealnewsvm2ndmthpop1h_7.30.20'
	],

	// General gateway
	'general' => [
		'variants' => [
			['printtemp-realnewsfisa2flc3', 100]
		],
		'test_name' => 'general--full_printtemp-realnewsfisa2flc3_11.30.21'
	],

	// General-test gateway
	'general-test' => [
		'variants' => [
			['dev-lukas4', 100]
		],
		'test_name' => 'general-test--full_dev-lukas4_01.18.21'
	],

	// Chinanews gateway
	'chinanews' => [
		'variants' => [
			['printtemp-ytchinanewsvm2ndmthpop1', 50],
			['printtemp-ytrealnewsvm2ndmthpop1', 50]
		],
		'test_name' => 'chinanews--ab_printtemp-ytchinanewsvm2ndmthpop1&ytrealnewsvm2ndmthpop1_6.10.20'
	],

	// crossroads gateway
	'crossroads' => [
		'variants' => [
			['digitemp-general5cny', 100]
		],
		'test_name' => 'crossroads--full_digitemp-general5cny_04.10.21'
	],

	// Wid`s gateway
	'sem' => [
		'variants' => [
			['digitemp-sem5g', 100]
		],
		'test_name' => 'sem--full_digitemp-sem5g_12.10.22'
	],

	// brand campaign
	'brand' => [
		'variants' => [
			['printtemp-ytfisa2ndmthpop2h', 100]
		],
		'test_name' => 'brand--full_digitemp-ytfisa2ndmthpop2h_10.24.20'
	],

	// Fisa campaign
	'digitalsubytfisa' => [
		'variants' => [
			['digitemp-yt5efisa', 100]
		],
		'test_name' => 'digitalsubytfisa--full_digitemp-yt5efisa_06.10.21'
	],

	// Postcard campaign
	'digitalsubpc' => [
		'variants' => [
			['digitemp-general5e2dm', 100]
		],
		'test_name' => 'digitalsubpc--full_digitemp-general5e2dm_04.22.21'
	],

	// new TV Campaign
	'digitalsubtv' => [
		'variants' => [
			['digitemp-yt5ffoodcrisis', 100]
		],
		'test_name' => 'digitalsubtv--full_digitemp-yt5ffoodcrisis_10.12.22'
	],

	// (Wid's)Digital Video LP test for Search gateway
	'digitalsubsemtest' => [
		'variants' => [
			['digitemp-vidlpfreecc2', 100]
		],
		'test_name' => 'digitalsubsemtest--full_digitemp-vidlpfreecc2_1.16'
	],

	// subhome gateway
	'subhome' => [
		'variants' => [
			['subhome3', 100]
		],
		'test_name' => 'subhome--full_subhome3_01.21.21'
	],

	// digitalsubemailmk
	'digitalsubemailmk' => [
		'variants' => [
			['digitemp-general5g-widp', 100]
		],
		'test_name' => 'digitalsubemailmk--full_digitemp-general5g-widp_07.27.22'
	],

	// digitalsubemailmk1f4
	'digitalsubemailmk1f4' => [
		'variants' => [
			['digitemp-em3b1f4', 50],
			['digitemp-em5b1f4', 50]
		],
		'test_name' => 'digitalsubemailmk1f4--ab_digitemp-em3b1f4&em5b1f4_11.13.20'
	],

	// digitalsub gateway
	'digitalsub' => [
		'variants' => [
			['digitemp-general5g-widp', 100]
		],
		'test_name' => 'digitalsub--full_digitemp-general5g-widp_07.27.22'
	],

	// australia digitalsub gateway
	'au-digitalsub' => [
		'variants' => [
			['au-digitalsub-v1', 100]
		],
		'test_name' => 'digitalsub--full_aus-bryan_06.30.22'
	],

	// australia printsub gateway
	'au-printsub' => [
		'variants' => [
			['au-printsub-v1', 100]
		],
		'test_name' => 'digitalsub--full_printtemp-full_aus-bryan_06.30.22'
	],

	// digitalsub-sample gateway
	'digitalsub-sample' => [
		'variants' => [
			['digitemp-general5e-widp', 100]
		],
		'test_name' => 'digitalsub--full_digitemp-general5e-widp_11.17.21'
	],

	// OriginsofCommunism gateway
	'originsofcommunism' => [
		'variants' => [
			['docutemp-communism', 100]
		],
		'test_name' => 'originsofcommunism--full_docutemp-communism_08.13.21'
	],

	// exclusive interview with Trump gateway
	'exclusivewithtrump' => [
		'variants' => [
			['eventtemp-trump', 100]
		],
		'test_name' => 'exclusivewithtrump--full_eventtemp-trump_02.03.22'
	],

	// secretworldofherbs gateway
	'secretworldofherbs' => [
		'variants' => [
			['docutemp-herbs', 100]
		],
		'test_name' => 'secretworldofherbs--full_docutemp-herbs_10.04.21'
	],

	// charlemagne gateway
	'charlemagne' => [
		'variants' => [
			['docutemp-charlemagne', 100]
		],
		'test_name' => 'charlemagne--full_docutemp-charlemagne_10.12.21'
	],

	// cuisineroyale gateway
	'cuisineroyale' => [
		'variants' => [
			['docutemp-cuisine', 100]
		],
		'test_name' => 'cuisineroyale--full_docutemp-cuisine_10.19.21'
	],

	// epochtvet gateway
	'epochtvet' => [
		'variants' => [
			['etvtemp-general1d', 100]
		],
		'test_name' => 'epochtvet--full_etvtemp-general1d_01.28.22'
	],

	// epochtv gateway
	'epochtvsub' => [
		'variants' => [
			['etvtemp-general1d', 100]
		],
		'test_name' => 'epochtvsub--full_etvtemp-general1d_01.28.22'
	],

	// epochtvsubfh gateway
	'epochtvsubfh' => [
		'variants' => [
			['etvtemp-general1d', 100]
		],
		'test_name' => 'epochtvsubfh--full_etvtemp-general1d_01.28.22'
	],

	// cross roads gateway
	'epochtvsubcr' => [
		'variants' => [
			['etvtemp-general1d', 100]
		],
		'test_name' => 'epochtvsubcr--full_etvtemp-general1d_01.28.22'
	],

	// American thought leaders gateway
	'epochtvsubatl' => [
		'variants' => [
			['etvtemp-general1d', 100]
		],
		'test_name' => 'epochtvsubatl--full_etvtemp-general1d_01.28.22'
	],

	// Larry king gateway
	'epochtvsuble' => [
		'variants' => [
			['etvtemp-larry1', 50],
			['etvtemp-general1b', 50]
		],
		'test_name' => 'epochtvsuble--ab_etvtemp-larry1&general1b_06.09.21'
	],

	// Tiffany gateway
	'epochtvsubcif' => [
		'variants' => [
			['etvtemp-tiffany1', 100]
		],
		'test_name' => 'epochtvsubcif--full_etvtemp-tiffany1_05.04.21'
	],

	// Siyamak gateway
	'epochtvsubci' => [
		'variants' => [
			['etvtemp-siyamak1', 100]
		],
		'test_name' => 'epochtvsubci--full_etvtemp-siyamak1_05.04.21'
	],

	// Cindy gateway
	'epochtvsubtns' => [
		'variants' => [
			['etvtemp-cindy1', 100]
		],
		'test_name' => 'epochtvsubtns--full_etvtemp-cindy1_05.04.21'
	],

	// Trevor gateway
	'epochtvsubcp' => [
		'variants' => [
			['etvtemp-trevor1', 100]
		],
		'test_name' => 'epochtvsubcp--full_etvtemp-trevor1_05.04.21'
	],

	// Life & Times gateway
	'epochtvsublt' => [
		'variants' => [
			['etvtemp-kay1', 100]
		],
		'test_name' => 'epochtvsublt--full_etvtemp-kay1_06.03.21'
	],

	// Truth over news gateway
	'epochtvsubton' => [
		'variants' => [
			['etvtemp-ton1', 100]
		],
		'test_name' => 'epochtvsubton--full_etvtemp-ton1_05.27.21'
	],

	// Real talk gateway
	'epochtvsubrt' => [
		'variants' => [
			['etvtemp-wayne1', 100]
		],
		'test_name' => 'epochtvsubrt--full_etvtemp-wayne1_06.04.21'
	],

	// realnews gateway -- print sub
	'realnews' => [
		'variants' => [
			['printtemp-ytrealnewsvm2ndmthpop1h', 100]
		],
		'test_name' => 'realnews--full_printtemp-ytrealnewsvm2ndmthpop1h_7.30.20'
	],

	// digitalsubsem gateway -- Wid`s
	'digitalsubsem' => [
		'variants' => [
			['digitemp-general5eccpv', 100]
		],
		'test_name' => 'digitalsubsem--full_digitemp-general5eccpv_04.24.21'
	],

	// digitalsubyt gateway -- Youtube
	'digitalsubyt' => [
		'variants' => [
			['digitemp-yt5eccpv2', 100]
		],
		'test_name' => 'digitalsubyt--full_digitemp-yt5eccpv2_06.20.22'
	],

	// digitalsubytborder gateway -- Youtube
	'digitalsubytborder' => [
		'variants' => [
			['digitemp-yt5fborder-p', 100]
		],
		'test_name' => 'digitalsubyt--full_digitemp-yt5fborder-p_12.06.22'
	],

	// digitalsubytmidterm gateway -- Youtube
	'digitalsubytmidterm' => [
		'variants' => [
			['digitemp-yt5fmidterm', 100]
		],
		'test_name' => 'digitalsubyt--full_digitemp-yt5fmidterm_10.18.22'
	],

	// digitalsubytdurham gateway -- Youtube
	'digitalsubytdurham' => [
		'variants' => [
			['digitemp-yt5edurham2', 50],
			['digitemp-yt5fdurham2', 50]
		],
		'test_name' => 'digitalsubytdurham--full_digitemp-yt5edurham2&digitemp-yt5fdurham2_09.10.22'
	],

	// digitalsubytconst gateway -- Youtube
	'digitalsubytconst' => [
		'variants' => [
			['digitemp-yt5econst', 50],
			['digitemp-yt5fconst', 50]
		],
		'test_name' => 'digitalsubytconst--full_digitemp-yt5econst&digitemp-yt5fconst_09.21.22'
	],

	// digitalsubytfoodcrisis gateway -- Youtube
	'digitalsubytfoodcrisis' => [
		'variants' => [
			['digitemp-yt5ffoodcrisis-p', 100]
		],
		'test_name' => 'digitalsubytfoodcrisis--full_digitemp-yt5ffoodcrisis-p_11.29.22'
	],

	// digitalsubytjan6 gateway -- Youtube
	'digitalsubytjan6' => [
		'variants' => [
			['digitemp-yt5fjan6-p', 100]
		],
		'test_name' => 'digitalsubytjan6--full_digitemp-yt5fjan6-p_12.14.22'
	],

	// digitalsubjan6doc gateway -- Youtube
	'digitalsubjan6doc' => [
		'variants' => [
			['digitemp-etvjan6doc', 100]
		],
		'test_name' => 'digitalsubjan6doc--full_digitemp-etvjan6doc_08.24.22'
	],

	// harry test gateway - youtube
	'digitalsubytpartners' => [
		'variants' => [
			['digitemp-yt5eccpv2-testh', 100]
		],
		'test_name' => 'digitalsubytpartners--full_digitemp-yt5eccpv2-testh_06.20.22'
	],

	// harry test gateway - youtube
	'digitalsubytdurhamh' => [
		'variants' => [
			['digitemp-yt5edurham2-testh', 100]
		],
		'test_name' => 'digitalsubytdurhamh--full_digitemp-yt5edurham2-testh_07.05.22'
	],

	// harry test gateway -- Youtube
	'digitalsubytconsth' => [
		'variants' => [
			['digitemp-yt5econst-testh', 100]
		],
		'test_name' => 'digitalsubytconsth--full_digitemp-yt5econst-testh_08.02.22'
	],

	// digitalsubshadowdoc gateway -- Youtube
	'digitalsubshadowdoc' => [
		'variants' => [
			['digitemp-etvshadowstatedoc', 100]
		],
		'test_name' => 'digitalsubshadowdoc--full_digitemp-etvshadowstatedoc_12.09.22'
	],

	// harry test gateway -- Youtube
	'digitalsubytfoodcrisish' => [
		'variants' => [
			['digitemp-yt5efoodcrisis-testh', 100]
		],
		'test_name' => 'digitalsubytfoodcrisish--full_digitemp-yt5efoodcrisis-testh_08.18.22'
	],

	// harry test gateway -- Youtube
	'digitalallaccesspartner' => [
		'variants' => [
			['digitemp-instasub-v1', 100]
		],
		'test_name' => 'digitalallaccesspartner--digitemp-instasub-v1_11.18.22'
	],

	// digitalsubytccpv gateway -- Youtube
	'digitalsubytccpv' => [
		'variants' => [
			['digitemp-yt5eccpv', 100]
		],
		'test_name' => 'digitalsubytccpv--full_digitemp-yt5eccpv_04.24.21'
	],

	// digitalsubytchina gateway -- Youtube
	'digitalsubytchina' => [
		'variants' => [
			['digitemp-yt5echina', 100]
		],
		'test_name' => 'digitalsubytchina--full_digitemp-yt5echina_04.26.21'
	],

	// digitalsubfmchina gateway -- Youtube -- Facts Matter
	'digitalsubfmchina' => [
		'variants' => [
			['digitemp-fm5echina', 100]
		],
		'test_name' => 'digitalsubfmchina--full_digitemp-fm5echina_04.26.21'
	],

	// infrastructure plan -- Youtube
	'digitalsubyteco' => [
		'variants' => [
			['digitemp-yt5einfras', 100]
		],
		'test_name' => 'digitalsubyteco--full_digitemp-yt5einfras_04.26.21'
	],

	// digitalsubem gateway -- emaill campaign
	'digitalsubem' => [
		'variants' => [
			['digitemp-general5f-widp', 100]
		],
		'test_name' => 'digitalsubem--full_digitemp-general5f-widp_03_28.22'
	],

	// digitalsubmeter gateway -- Digital Subscription LEARN MORE button
	'digitalsubmeter' => [
		'variants' => [
			['digitalsub1', 20],
			['digitalsub1c', 30],
			['digitalsub1d', 30]
		],
		'test_name' => 'digitalsubmeter_1ce'
	],

	// digitalsubselection gateway -- Digital Subscription LEARN MORE button
	'digitalsubselection' => [
		'variants' => [
			['digitalsub1', 20],
			['digitalsub1c', 30],
			['digitalsub1d', 30]
		],
		'test_name' => 'digitalsubselection_1ce'
	],

	// TV gateway -- newspaper subscription
	'tv' => [
		'variants' => [
			['digitemp-sem5f', 100]
		],
		'test_name' => 'tv-full_digitemp-sem5f_04.29.21'
	],

	// TV2 gateway -- newspaper subscription
	'tv2' => [
		'variants' => [
			['digitemp-sem3f', 100]
		],
		'test_name' => 'tv2-full_digitemp-sem3f_04.12.21'
	],

	// digitalsubfb
	'digitalsubfb' => [
		'variants' => [
			['digitemp-npholiday2', 100]
		],
		'test_name' => 'digitalsubfb-full_digitemp-npholiday2'
	],

	// https://subscribe.theepochtimes.com/p/?page=digitemp-fborg2
	'digitemp-fborg2' => [
		'variants' => [
			['digitemp-general2a', 100]
		],
		'test_name' => 'redirect-amazongiftcard'
	],

	// gift
	'gift' => [
		'variants' => [
			['printgift4a', 100]
		],
		'test_name' => 'gift-full_printgift4a_11.7.22'
	],

	// library gift
	'gift-library' => [
		'variants' => [
			['printgift3c-library', 100]
		],
		'test_name' => 'gift-full_printgift3clibrary_12.14.21'
	],

	// digital gift
	'digital-gift' => [
		'variants' => [
			['digitemp-gift', 100]
		],
		'test_name' => 'gift-full_digitalgift_11.11.21'
	],

	// insight gift
	'insight-gift' => [
		'variants' => [
			['emtemp-gift1', 100]
		],
		'test_name' => 'gift-full_emtemp-gift1_11.18.21'
	],

	// print fb np
	'printfbnp' => [
		'variants' => [
			['printtemp-npvm2bpop1h', 100]
		],
		'test_name' => 'printfbnp-full_printtemp-npvm2bpop1h_7.30.20'
	],

	// non-political internal
	'digitalsubfbam' => [
		'variants' => [
			['digitemp-npam2', 100]
		],
		'test_name' => 'digitalsubfbam-full_digitemp-npam2'
	],

	// uranium-one
	'uranium-one' => [
		'variants' => [
			['printtemp-holiday2c', 100]
		],
		'test_name' => 'uranium-one-full_holiday2c_12.31'
	],

	// border-special
	'border-special' => [
		'variants' => [
			['printtemp-holiday2c', 100]
		],
		'test_name' => 'border-special-full_holiday2c_12.31'
	],


	// Harry's new campaigns gateway
	'getrealnews' => [
		'variants' => [
			['printtemp-ytrealnewsvm2ndmthpop1h', 100]
		],
		'test_name' => 'getrealnews-full_printtemp-ytrealnewsvm2ndmthpop1h_7.30.20'
	],

	// Bright checkout 
	'cp-eet_bright' => [
		'variants' => [
			['cp-eet_bright_v0722a', 50],
			['cp-eet_bright_v0722b', 50]
		],
		'test_name' => 'cp-eet_bright_v0722_desk'
	],

		// Bright checkout 
		'cp-eet_bright123' => [
			'variants' => [
				['cp-eet_bright_v0722a', 50],
				['cp-eet_bright_v0722b', 50]
			],
			'test_name' => 'cp-eet_bright_v0722_desk'
		],
	

	// Harry's test gateway
	'specialoffer' => [
		'variants' => [
			['printtemp-ytccpvvm2c2ndmthpop1h', 50],
			['printtemp-ytrealnewsvm2ndmthpop1h', 50]
		],
		'test_name' => 'specialoffer--ab_printtemp-ytccpvvm2c2ndmthpop1h&ytrealnewsvm2ndmthpop1h_7_30_20'
	],


	// email signup LP
	'emailaffil-whitelabel01' => [
		'variants' => [
			['emailaffil-whitelabel01redirect', 100]
		],
		'test_name' => 'full-emailaffil-whitelabel01redirect'
    ],
    
    // EpochSample.com
    'epoch-sample' => [
		'variants' => [
			['printtemp-realnewsfisa2flc2', 100]
		],
		'test_name' => 'full-printtemp-printtemp-realnewsfisa2flc2_11_30_21'
    ],

	/**
	 * Testing only
	 */
	'test' => [
		'variants' => [
			['spygate_05', 50],
			['insta_spygate008', 50]
		],
		'test_name' => 'just_test_abtest'
	],

	/**
	 * Meter Landing Page Facebook IN USE
	 */
	'meter_facebook' => [
		'variants' => [
			['digitemp-meterholiday2b', 100]
		],
		'test_name' => 'full-digitemp-meterholiday2b'
	],

	/**
	 * Meter Landing Page for testing
	 */
	'meter_news1' => [
		'variants' => [
			['digitemp-meterholidayjoshsimple', 100]
		],
		'test_name' => 'full-digitemp-meterholidayjoshsimple'
	],
	'meter_news2' => [
		'variants' => [
			['digitemp-meternewyear2', 100]
		],
		'test_name' => 'full-digitemp-meternewyear2'
	],
	'meter_news3' => [
		'variants' => [
			['digitemp-meterfreecc2', 100]
		],
		'test_name' => 'full-digitemp-meterfreecc2'
	],
	'meter_news4' => [
		'variants' => [
			['digitemp-metergeneral3', 100]
		],
		'test_name' => 'meter_news4--full_digitemp-metergeneral3_8.12'
	],

	// PIPA

	'meter_news4-pipa' => [
		'variants' => [
			['digitemp-metergeneral2-pipa', 100]
		],
		'test_name' => 'meter_news4-pipa--full_digitemp-metergeneral2_8.3.20'
	],

	/**
	 * Article Landing Page IN USE
	 */
	'article_landingpage' => [
		'variants' => [
			['digitemp-articlegeneral2', 100]
		],
		'test_name' => 'article_landingpage--full_digitemp-articlegeneral2_2.1'
	],
	/**
	 * Article Landing Page Test
	 */
	'article_landingpage_print' => [
		'variants' => [
			['printtemp-articlenewsholiday2', 100]
		],
		'test_name' => 'full-printtemp-articlenewsholiday2'
	],



	// Coffee Donations
	'coffee' => [
		'variants' => [
			['coffee-01', 100]
		],
		'test_name' => 'coffee-01-full'
	],
	'coffee-atl' => [
		'variants' => [
			['coffee-01', 100]
		],
		'test_name' => 'coffee-atl-01-full'
    ],

	
	// Donation
	'donation' => [
		'variants' => [
			['donate02', 100]
		],
		'test_name' => 'donate02-full'
    ],


    
    // TESTS
	'test2' => [
		'variants' => [
			['digitemp-yt3d-cp4', 100]
		],
		'test_name' => 'test2'
	],

];