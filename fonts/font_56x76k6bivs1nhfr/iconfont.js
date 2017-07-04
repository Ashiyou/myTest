;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xiangji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M880.672152 899.013381l-38.806841 0 0 0L182.136735 899.013381c-0.001023 0-0.001023 0-0.001023 0l-38.805818 0c-42.866297 0-77.616752-34.654264-77.616752-77.402881l0-522.469446c0-42.74964 34.750455-77.402881 77.616752-77.402881l38.805818 0 0.001023 0 0 0 126.126582 0 48.50676-77.401858c0-10.689457 28.092825-19.351744 38.808888-19.351744l232.845139 0c10.714016 0 38.806841 8.662287 38.806841 19.351744l48.510854 77.401858 126.123512 0 38.806841 0c42.866297 0 77.613682 34.653241 77.613682 77.402881l0 522.469446C958.285834 864.359117 923.538449 899.013381 880.672152 899.013381zM512.001535 299.141054c-139.312906 0-252.249071 112.627127-252.249071 251.560386 0 138.934283 112.936165 251.558339 252.249071 251.558339 139.308813 0 252.241908-112.620987 252.247025-251.54606l0-0.022513C764.243443 411.762041 651.310348 299.141054 512.001535 299.141054zM512.001535 724.857922c-96.447633 0-174.633343-77.968769-174.633343-174.155459 0-96.18362 78.18571-174.157505 174.633343-174.157505s174.632319 77.973886 174.632319 174.157505C686.633854 646.889153 608.449167 724.857922 512.001535 724.857922z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-our" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M586.428716 489.396678c53.069736-27.110478 89.405329-82.3046 89.405329-145.988078 0-90.482871-73.350662-163.833533-163.833533-163.833533-90.482871 0-163.833533 73.350662-163.833533 163.833533 0 63.682455 36.335593 118.8776 89.404305 145.988078C330.425902 521.397542 252.313792 620.688018 252.313792 738.238389c0 65.398541 116.265097 106.187567 259.685697 106.187567 143.4206 0 259.68672-40.788003 259.68672-106.187567C771.686208 620.688018 693.573075 521.397542 586.428716 489.396678z"  ></path>' +
    '' +
    '<path d="M326.343929 522.710445c-15.741535-12.366668-33.832583-21.879332-53.494408-27.752092 33.062033-16.889686 55.699635-51.275878 55.699635-90.950522 0-56.370925-45.696807-102.067732-102.067732-102.067732-56.370925 0-102.067732 45.697831-102.067732 102.067732 0 39.674644 22.636579 74.060837 55.698612 90.950522-66.751353 19.937095-115.414728 81.794993-115.414728 155.028997 0 38.590962 64.987172 63.422535 147.778866 65.938847C219.32646 635.443085 262.886602 565.439661 326.343929 522.710445z"  ></path>' +
    '' +
    '<path d="M843.887696 494.958353c33.062033-16.889686 55.699635-51.275878 55.699635-90.950522 0-56.370925-45.696807-102.067732-102.067732-102.067732-56.370925 0-102.067732 45.697831-102.067732 102.067732 0 39.674644 22.636579 74.060837 55.698612 90.950522-19.661825 5.87276-37.75185 15.385424-53.494408 27.752092 63.457327 42.729216 107.018492 112.73264 113.868511 193.215753 82.791694-2.516312 147.778866-27.347885 147.778866-65.938847C959.303448 576.753346 910.639049 514.895448 843.887696 494.958353z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-services" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M659.84 42.24 643.84 48.64 586.24 71.04 570.24 77.44 574.08 94.08 586.24 155.52C580.251054 161.558927 573.815706 168.581036 567.04 176L506.24 162.56 489.6 158.72 483.2 174.08 458.24 231.68 451.84 247.04 465.92 256.64 518.4 291.84C517.788672 301.877371 517.814067 311.891681 518.4 321.92L464.64 355.2 449.92 364.16 456.32 380.16 478.72 437.76 485.12 453.76 501.76 449.92 563.2 437.76C569.457029 445.169459 576.304517 451.94709 583.68 458.24L569.6 519.68 565.76 536.32 581.76 543.36 639.36 567.68 654.72 574.08 664.32 560 699.52 507.52C709.557371 508.131328 719.571681 508.105933 729.6 507.52L762.88 561.92 771.84 576 787.84 570.24 845.44 547.2 861.44 540.8 857.6 524.16 843.52 456.96C851.161006 450.507428 858.187428 443.481006 864.64 435.84L926.72 451.84 944 456.32 950.4 440.32 975.36 382.72 982.4 366.72 967.04 357.12 913.28 324.48C913.891328 314.442629 913.865933 304.428319 913.28 294.4L967.04 261.12 981.76 252.16 975.36 236.16 952.96 178.56 946.56 162.56 929.28 166.4 866.56 180.48C860.302971 173.070545 853.455483 166.292918 846.08 160L859.52 98.56 863.36 81.92 848 75.52 790.4 50.56 774.4 44.16 764.8 58.88 732.16 110.72C722.738586 109.785027 712.49707 110.65303 702.08 111.36L668.8 56.96 659.84 42.24zM642.56 92.8 672.64 142.08 680.32 154.24 694.4 151.04C708.911944 147.815125 722.522522 149.613609 741.12 151.68L753.92 152.96 760.96 142.08 790.4 95.36 816 106.24 803.2 161.28 800 174.72 811.52 182.4C824.054354 191.353106 834.566902 201.86565 843.52 214.4L851.2 225.92 864.64 222.72 920.96 209.92 931.2 235.52 881.92 264.96 871.04 272 872.32 284.8C874.220954 301.908111 874.220954 316.331889 872.32 333.44L871.04 346.24 881.92 353.28 930.56 383.36 920.32 407.68 863.36 393.6 849.28 390.4 841.6 401.92C832.646902 414.454354 822.134354 424.966902 809.6 433.92L798.72 441.6 801.28 455.04 814.08 515.84 788.48 525.44 759.04 476.8 752 465.92 739.2 467.2C722.091889 469.100954 707.668111 469.100954 690.56 467.2L677.76 465.92 671.36 476.16 640 523.52 613.76 512 625.92 456.96 629.12 444.16 618.24 435.84C605.705646 426.886902 595.193098 416.374354 586.24 403.84L578.56 392.96 565.12 395.52 510.08 407.04 500.48 381.44 549.12 351.36 560.64 344.32 558.72 331.52C556.819046 314.411889 556.819046 299.988111 558.72 282.88L560.64 270.72 549.76 263.68 502.4 232.32 513.28 206.08 568.96 218.88 581.12 221.44 588.8 211.84C600.4608 198.235744 612.48 186.24 622.72 176L630.4 168.32 628.48 158.08 616.96 103.04 642.56 92.8zM716.8 204.8C660.488622 204.8 614.4 250.888622 614.4 307.2 614.4 363.511378 660.488622 409.6 716.8 409.6 773.111378 409.6 819.2 363.511378 819.2 307.2 819.2 250.888622 773.111378 204.8 716.8 204.8zM716.8 245.76C750.974956 245.76 778.24 273.025044 778.24 307.2 778.24 341.374956 750.974956 368.64 716.8 368.64 682.625044 368.64 655.36 341.374956 655.36 307.2 655.36 273.025044 682.625044 245.76 716.8 245.76zM277.12 409.6 274.56 426.88 264.32 493.44C253.224018 496.997601 242.507059 502.083011 232.32 507.52L176 466.56 161.92 456.32 149.12 469.12 102.4 515.84 90.24 528 99.84 542.08 138.88 598.4C133.395505 609.398292 128.476078 620.287857 124.8 631.04L57.6 643.2 40.96 646.4 40.96 663.68 40.96 728.96 40.96 746.24 57.6 749.44 124.8 761.6C128.360737 772.806451 133.399507 783.31562 138.88 793.6L98.56 848 87.68 862.08 100.48 874.88 147.2 921.6 159.36 933.76 173.44 924.16 229.76 885.12C240.758292 890.604503 251.647857 895.523922 262.4 899.2L272.64 965.76 275.2 983.04 293.12 983.04 358.4 983.04 375.68 983.04 378.24 966.4 391.04 899.2C402.135982 895.642399 412.852941 890.556989 423.04 885.12L479.36 926.08 493.44 936.32 506.24 923.52 552.96 876.8 565.12 864.64 555.52 850.56 514.56 793.6C519.909724 782.779822 525.024645 772.17452 528.64 761.6L597.76 749.44 614.4 746.24 614.4 728.96 614.4 663.68 614.4 645.76 597.12 643.2 528 632.96C524.450693 621.902787 519.975977 611.114435 514.56 600.96L555.52 544.64 565.12 530.56 553.6 518.4 506.24 469.12 494.08 456.32 479.36 466.56 423.04 507.52C412.219822 502.170276 401.61452 497.055355 391.04 493.44L380.8 426.88 378.24 409.6 360.32 409.6 295.04 409.6 277.12 409.6zM312.32 450.56 343.04 450.56 352.64 511.36 354.56 523.52 366.08 527.36C384.512 533.504 401.707889 539.307438 415.36 547.84L426.88 554.88 437.76 547.2 488.96 510.08 512 534.4 474.88 586.24 466.56 597.12 474.24 608.64C483.423027 623.332823 490.6112 640.390451 494.08 656L497.28 669.44 510.72 671.36 573.44 680.96 573.44 712.32 510.72 723.2 498.56 725.12 494.72 736.64C488.576 755.072 482.772562 772.267889 474.24 785.92L466.56 797.44 474.88 808.32 512 860.16 488.96 882.56 437.76 845.44 426.88 837.76 415.36 844.8C400.667177 853.983027 383.609549 861.1712 368 864.64L355.2 867.84 352.64 881.28 341.76 942.08 310.4 942.08 300.8 881.28 298.88 869.12 287.36 865.28C268.928 859.136 251.732111 853.332562 238.08 844.8L226.56 837.76 215.68 845.44 163.84 880.64 141.44 858.24 177.92 808.96 186.88 797.44 179.2 785.92C170.016981 771.227177 162.82879 754.809549 159.36 739.2L156.16 725.76 142.72 723.2 81.92 712.32 81.92 680.32 142.72 669.44 154.88 666.88 158.72 656C164.864 637.568 170.66743 620.372111 179.2 606.72L186.24 595.2 178.56 584.32 143.36 532.48 166.4 510.08 217.6 547.2 228.48 554.88 240 547.84C254.692823 538.656973 271.750451 531.4688 287.36 528L300.8 524.8 302.72 511.36 312.32 450.56zM327.68 593.92C271.453082 593.92 225.28 640.093082 225.28 696.32 225.28 752.546918 271.453082 798.72 327.68 798.72 383.906918 798.72 430.08 752.546918 430.08 696.32 430.08 640.093082 383.906918 593.92 327.68 593.92zM327.68 634.88C361.565082 634.88 389.12 662.434918 389.12 696.32 389.12 730.205082 361.565082 757.76 327.68 757.76 293.794918 757.76 266.24 730.205082 266.24 696.32 266.24 662.434918 293.794918 634.88 327.68 634.88z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mail" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M920.292 760.32c0 8.127-6.608 14.734-14.735 14.734H128.512c-8.143 0-14.734-6.594-14.734-14.734V242.29c0-8.14 6.591-14.734 14.734-14.734h777.045c8.127 0 14.735 6.607 14.735 14.734v518.03z m56.888 0V242.29c0-39.546-32.077-71.623-71.623-71.623H128.512c-39.567 0-71.623 32.07-71.623 71.623v518.03c0 39.553 32.056 71.623 71.623 71.623h777.045c39.546 0 71.623-32.077 71.623-71.623zM78.866 389.468l431.701 177.01 21.582-52.636-431.701-177.01-21.582 52.636z m21.582-52.636c-35.09-14.388-56.673 38.248-21.582 52.636l431.701 177.01c35.09 14.388 56.673-38.248 21.582-52.636l-431.701-177.01z m431.85 229.584L946.735 393.73l-21.88-52.513-414.436 172.687 21.88 52.512z m-21.88-52.512c-35.009 14.587-13.128 67.1 21.88 52.512L946.735 393.73c35.009-14.587 13.128-67.1-21.88-52.513L510.417 513.904z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M827.667456 385.504256c0-176.451584-143.03744-319.488-319.488-319.488s-319.488 143.036416-319.488 319.488c0 64.45056 19.105792 124.439552 51.933184 174.63296L240.059392 560.137216l239.49824 382.789632 0.01024 0c5.231616 10.505216 16.077824 17.729536 28.611584 17.729536 12.532736 0 23.380992-7.225344 28.61056-17.729536l0.01024 0 239.499264-382.789632-0.565248 0C808.562688 509.943808 827.667456 449.95584 827.667456 385.504256L827.667456 385.504256zM508.179456 239.819776c80.461824 0 145.685504 65.222656 145.685504 145.685504 0 80.462848-65.222656 145.68448-145.685504 145.68448-80.462848 0-145.68448-65.221632-145.68448-145.68448C362.496 305.042432 427.716608 239.819776 508.179456 239.819776L508.179456 239.819776zM508.179456 239.819776"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-wifi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128.927883 359.53147 128.927883 506.764765c95.540983 0 185.351452 37.343513 252.866125 105.195877 66.696028 67.045999 103.783715 155.985634 104.741529 250.861468L633.757576 862.822111C631.726314 584.978105 406.096507 359.53147 128.927883 359.53147"  ></path>' +
    '' +
    '<path d="M129.126404 98.550527 129.126404 245.77052c339.234191 0 615.386672 276.461519 617.47524 617.052614l147.219993 0C891.733069 441.030645 549.535383 98.550527 129.126404 98.550527"  ></path>' +
    '' +
    '<path d="M230.763223 658.700153c-56.308447 0-101.947903 45.639456-101.947903 101.963253 0 56.337099 45.639456 101.975533 101.947903 101.975533 56.307424 0 102.005208-45.639456 102.005208-101.975533C332.768431 704.33961 287.071669 658.700153 230.763223 658.700153"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M683.337785 65.290005 340.672448 65.290005c-37.223786 0-67.390853 30.170137-67.390853 67.38369l0 758.654656c0 37.21253 30.167067 67.38062 67.390853 67.38062l342.66636 0c37.21253 0 67.38062-30.167067 67.38062-67.38062L750.719428 132.673695C750.718405 95.461165 720.551338 65.290005 683.337785 65.290005zM465.445196 124.719536l93.107561 0c8.206916 0 14.858406 6.65149 14.858406 14.857383s-6.65149 14.857383-14.858406 14.857383l-93.107561 0c-8.206916 0-14.858406-6.650467-14.858406-14.857383S457.239304 124.719536 465.445196 124.719536zM511.996418 928.995229c-24.613584 0-44.572148-19.954471-44.572148-44.574195 0-24.617677 19.958564-44.572148 44.572148-44.572148 24.619724 0 44.578288 19.954471 44.578288 44.572148C556.573683 909.040758 536.616142 928.995229 511.996418 928.995229zM720.004893 812.120358 303.994084 812.120358 303.994084 213.863832l416.011832 0L720.005916 812.120358z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontboxno" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M576.015478 574.882166l0 39.434128c0 13.57825-11.003612 24.581861-24.580838 24.581861l-78.870302 0c-13.576203 0-24.579815-11.004635-24.579815-24.581861l0-39.434128L63.892681 574.882166l0 270.919293c0 27.033703 22.122857 49.158606 49.160653 49.158606l797.893332 0c27.03882 0 49.160653-22.124903 49.160653-49.158606L960.107319 574.882166 576.015478 574.882166z"  ></path>' +
    '' +
    '<path d="M910.946666 254.807337 704.048479 254.807337l0-78.871325c0-27.037796-22.122857-49.160653-49.161676-49.160653L369.115244 126.775358c-27.039843 0-49.161676 22.122857-49.161676 49.160653l0 78.871325L113.053334 254.807337c-27.037796 0-49.160653 22.121833-49.160653 49.160653l0 206.900234 384.092865 0 0-39.434128c0-13.576203 11.003612-24.579815 24.579815-24.579815l78.870302 0c13.577227 0 24.580838 11.003612 24.580838 24.579815l0 39.434128 384.091842 0L960.108343 303.966966C960.107319 276.92917 937.985486 254.807337 910.946666 254.807337M640.031467 254.807337 383.968533 254.807337l0-64.014966 256.062933 0L640.031467 254.807337z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-naoling" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M938.88 744c-22.016-13.376-44.736-27.264-58.368-45.504C839.744 644.352 818.24 579.904 818.24 512L818.24 409.152c0-151.616-111.04-276.992-255.872-301.184 9.472-11.456 15.936-25.6 15.936-41.664C578.304 29.76 548.544 0 512 0 475.456 0 445.632 29.76 445.632 66.368c0 16 6.464 30.208 16 41.664-144.896 24.192-256 149.504-256 301.184L205.632 512c0 67.84-21.44 132.352-62.08 186.496-13.632 18.24-36.352 32.128-58.368 45.504C47.232 767.104 0 796.032 0 854.848c0 17.728 14.336 32 32 32L418.56 886.848c-4.48 11.392-7.104 23.68-7.104 36.608C411.392 978.88 456.512 1024 512 1024c55.424 0 100.48-45.12 100.48-100.48 0-12.928-2.624-25.28-7.104-36.608L992 886.912c17.728 0 32-14.272 32-32C1024 796.032 976.768 767.104 938.88 744zM83.072 822.848c8.704-7.104 19.84-14.72 35.456-24.256 25.856-15.744 55.232-33.728 76.224-61.76 49.024-65.28 74.88-142.976 74.88-224.832L269.632 409.152c0-133.568 108.736-242.24 242.368-242.24 133.568 0 242.24 108.672 242.24 242.24L754.24 512c0 81.856 25.984 159.744 75.008 224.832 20.992 28.032 50.368 46.016 76.224 61.76 15.616 9.472 26.752 17.152 35.52 24.256L83.072 822.848z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dianhua" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M849.437266 719.042473l-147.253762-86.764086c-7.65126-3.9121-18.877953-2.128477-24.954345 3.947915l-43.327808 43.322691c-6.064113 6.068206-18.063401 11.118222-26.65201 11.217483 0 0-55.362912 0.63752-158.303422-102.3122-102.944604-102.939487-102.453417-158.480454-102.453417-158.480454 0.081864-8.588609 5.112438-20.587897 11.180644-26.647917l36.932144-36.927027c6.076392-6.086625 8.114818-17.430998 4.530177-25.245987l-81.229023-152.776546c-3.583618-7.80578-11.490705-9.225105-17.557888-3.166109l-100.734262 100.492762c-6.077416 6.049786-11.980869 17.98563-13.122879 26.500561 0 0-19.651572 146.836253 186.101535 352.58936 205.757201 205.752084 352.588337 186.101535 352.588337 186.101535 8.510838-1.146103 20.446681-7.04137 26.510794-13.109576l100.615559-100.611465C858.371752 731.10623 857.084433 722.937177 849.437266 719.042473z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-twitter" viewBox="0 0 1053 1024">' +
    '' +
    '<path d="M518.187287 413.178763c0 0-201.368055-13.424298-318.160972-159.751746 0 0-69.80832 118.136331 42.958829 198.683017 0 0-21.246711 12.082674-64.320996-14.766818 0 0-14.883169 99.340166 118.019085 146.326552 0 0 0 10.740155-65.779867 5.370077 0 0 26.849492 83.231724 139.614851 104.711138 0 0-80.54758 76.520022-225.531613 60.410685 0 0 598.734088 288.627337 687.335889-377.229138 0 0 67.122387-51.012155 79.204166-80.54579l-79.204166 22.821934c0 0 59.067271-53.698088 56.382232-81.890099 0 0-92.628464 41.615414-96.656022 30.876155S538.324182 111.125337 518.187287 413.178763z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-facebook-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.981 163.828v109.25h-64.971q-35.588 0-48.004 14.898t-12.415 44.693v78.213h121.252l-16.139 122.493h-105.112v314.093h-126.631v-314.093h-105.526v-122.493h105.526v-90.214q0-76.972 43.038-119.388t114.63-42.417q60.833 0 94.353 4.965z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-needlezhen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M785.1008 597.2992C785.1008 608.6656 779.3664 614.4 768 614.4L512 614.4l0 392.4992C512 1018.2656 506.2656 1024 494.8992 1024S477.9008 1018.2656 477.9008 1006.8992L477.9008 614.4l-256 0C210.5344 614.4 204.8 608.6656 204.8 597.2992c0-36.9664 15.9744-72.9088 48.0256-107.7248 32.0512-34.816 72.9088-60.1088 122.6752-75.776L375.5008 164.2496C345.6 150.016 321.024 128.3072 301.8752 99.2256 282.624 70.0416 273.1008 42.7008 273.1008 17.1008 273.1008 5.7344 278.7328 0 290.0992 0l409.6 0C711.0656 0 716.8 5.7344 716.8 17.1008c0 25.6-9.6256 52.9408-28.7744 82.1248C668.7744 128.3072 644.3008 150.016 614.4 164.2496l0 249.6512c48.3328 15.6672 88.576 40.5504 120.5248 74.6496 32.0512 34.0992 48.7424 69.7344 50.176 106.7008L785.1008 597.2992zM748.8512 580.3008c-5.7344-27.0336-22.4256-53.3504-50.176-78.9504-27.7504-25.6-62.2592-44.8512-103.424-57.5488L394.6496 443.8016c-41.2672 12.8-75.776 31.9488-103.424 57.5488-27.7504 25.6-44.4416 51.9168-50.176 78.9504L748.8512 580.3008zM309.3504 34.0992c11.3664 48.3328 40.5504 82.5344 87.4496 102.4l196.3008 0c46.8992-19.8656 76.0832-54.0672 87.4496-102.4L309.3504 34.0992zM409.6 409.6l170.7008 0L580.3008 170.7008 409.6 170.7008 409.6 409.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-cup" viewBox="0 0 1025 1024">' +
    '' +
    '<path d="M1023.683403 163.068367c-0.118454-6.478253-0.227719-12.073201-0.227719-16.785864L838.692726 146.282503c3.566919-79.125772 1.382653-140.496598 1.382653-140.496598-0.113349-3.181941-2.81126-5.785905-5.995243-5.785905L514.000937 0c-0.776083 0-1.530722 0.050037-2.287404 0.132751-0.754639-0.083736-1.516425-0.132751-2.287404-0.132751L188.516726 0c-3.183984 0-5.881895 2.602942-5.996264 5.785905 0 0-2.18835 61.370825 1.380611 140.496598L6.319949 146.282503c-3.183984 0-5.908444 0-6.054471 0s-0.265502 2.604985-0.265502 5.788968l0 35.390417c0 3.183984 0 5.965629 0 6.182116 0 0.216486 0 2.998132 0 6.182116l0 13.814282c0 3.183984 0.165428 5.788968 0.367618 5.788968l0 0c1.851367 59.648125 11.381874 139.425399 51.047897 221.093866 33.639125 69.271558 82.081016 127.229659 143.991015 172.260869 51.248045 37.28978 109.799442 64.145323 174.17759 80.194929 37.178472 39.676236 73.841258 61.555656 105.840396 70.350926l0 81.423387c-4.563574 24.191332-32.314677 106.099772-225.74628 106.099772l-24.458877 0c-3.183984 0-5.788968 2.604985-5.788968 5.788968l0 61.560762c0 3.183984 2.604985 5.788968 5.788968 5.788968l573.555138 0c3.183984 0 5.788968-2.604985 5.788968-5.788968L804.563444 956.644129c0-3.183984-2.604985-5.788968-5.788968-5.788968l-24.331231 0c-226.930828 0-225.928046-106.976949-225.928046-106.976949 0.029614-3.183984 0.054122-8.393953 0.054122-11.577937L548.569319 763.317705c31.994032-8.780973 67.949152-30.572574 104.936667-70.042535 64.84482-16.009781 123.592279-42.972547 175.166075-80.489024 61.89264-45.037337 110.310022-102.994417 143.944041-172.271081C1026.745867 329.066448 1024.733157 221.08059 1023.683403 163.068367zM117.172209 408.555754c-33.05502-68.064544-41.707326-136.560018-43.602604-189.125362l115.396432 0c1.988203 20.373206 4.496178 40.457425 7.677098 59.377517 19.455182 115.90497 46.192271 218.272394 96.804132 308.593167C216.107506 548.225211 155.361632 487.200559 117.172209 408.555754zM906.819561 408.555754c-38.4151 79.105349-99.656238 140.396524-177.662817 179.542776 50.77831-90.49335 77.294829-193.079302 96.805153-309.2896 3.174793-18.920092 5.682768-39.004311 7.669949-59.377517l116.795424 0C948.522802 271.994715 939.874581 340.491211 906.819561 408.555754zM906.819561 408.555754"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-linkedin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.267234 959.569968c247.223255 0 447.572016-200.400979 447.572016-447.582255 0-247.171037-200.347737-447.558705-447.572016-447.558705-247.194586 0-447.568944 200.387669-447.568944 447.558705 0 247.1823 200.373334 447.582255 447.568944 447.582255" fill="#1284C7" ></path>' +
    '' +
    '<path d="M387.013295 699.188763h-87.249365V419.999808h87.249365v279.188955z m-45.860848-314.114707h-0.628666c-31.57048 0-52.042043-21.341866-52.042043-48.378582 0-27.573232 21.086918-48.478922 53.286064-48.478922 32.175596 0 51.975491 20.852449 52.607228 48.402131 0.001024 27.046955-20.430608 48.455373-53.222583 48.455373z m394.899259 314.114707H637.125954V554.711376c0-37.815157-15.457597-63.618091-49.496664-63.61809-26.03126 0-40.488521 17.410146-47.233878 34.204937-2.518758 6.013279-2.133777 14.405043-2.133777 22.820356v151.06916h-98.001184s1.273713-255.921161 0-279.188955h98.001184v43.815125c5.794167-19.157918 37.097413-46.5018 87.093733-46.5018 61.986018 0 110.696338 40.168045 110.696338 126.630041v155.246613z" fill="#FFFFFF" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tuding" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M530.432 948.736l47.616-303.616 188.416 6.656s48.64-31.232 22.016-66.048l-100.864-107.52-20.992-169.984 55.296-69.632s36.864-62.464-36.864-70.144l-331.776-1.024s-50.688 44.032-5.632 86.528l45.056 50.688-23.04 162.304-89.088 112.64s-23.04 51.712 19.456 71.168l176.64-1.536 53.76 299.52z m5.12-486.4l-148.992 2.56 25.6-161.28h123.392v158.72z" fill="#040000" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)