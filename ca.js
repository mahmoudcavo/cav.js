document.addEventListener("DOMContentLoaded", function() {
    const themeToggleButton = document.getElementById("theme-toggle-button");

    // تابع لتبديل المظهر
    function toggleTheme(isDarkMode) {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            themeToggleButton.textContent = "المظهر العادي";
            themeToggleButton.style.backgroundImage = "";
        } else {
            document.body.classList.remove("dark-mode");
            themeToggleButton.textContent = "المظهر الداكن";
            themeToggleButton.style.backgroundImage = "";
        }
    }

    // تابع لتعيين قيمة الكوكي
    function setThemeCookie(isDarkMode) {
        document.cookie = "darkMode=" + isDarkMode;
    }

    // تابع للحصول على قيمة الكوكي
    function getThemeCookie() {
        const cookies = document.cookie.split(';');
        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name.trim() === 'darkMode') {
                return value.trim() === 'true';
            }
        }
        return false;
    }

    // التبديل عند تحميل الصفحة
    const isDarkMode = getThemeCookie();
    toggleTheme(isDarkMode);

    // التبديل عند النقر على الزر
    themeToggleButton.addEventListener("click", function() {
        const isDarkMode = document.body.classList.contains("dark-mode");
        toggleTheme(!isDarkMode);
        setThemeCookie(!isDarkMode);
    });
});

$(function() {
    $(document).ready(function() {
        $('a:not(:has(img))').each(function() {
            var html = $(this).html();
            var updatedHtml = html;

            
              updatedHtml = updatedHtml
                    // Select prefix-Text
                    .replace(/\[جديد\]/g, '<span class="bade2-label جديد">جديد</span>')
                    .replace(/\[عاجل\]/g, '<span class="bade2-label عاجل">عاجل</span>')
                    .replace(/\[حصري\]/g, '<span class="bade2-label حصري">حصري</span>')
                    .replace(/\[تقنية\]/g, '<span class="bade2-label تقنية">تقنية</span>')
                    .replace(/\[درس\]/g, '<span class="bade2-label درس">درس</span>')
                    .replace(/\[ملحق\]/g, '<span class="bade2-label ملحق">ملحق</span>')
                    .replace(/\[شرح\]/g, '<span class="bade2-label شرح">شرح</span>')
                    .replace(/\[برنامج\]/g, '<span class="bade2-label برنامج">برنامج</span>')
                    .replace(/\[شكوي\]/g, '<span class="bade2-label شكوي">شكوي</span>')
                    .replace(/\[هام\]/g, '<span class="bade2-label هام">هام</span>')
                    .replace(/\[مخالف\]/g, '<span class="bade2-label مخالف">مخالف</span>')
                    .replace(/\[قانون\]/g, '<span class="bade2-label قانون">قانون</span>')
                    .replace(/\[أعلان\]/g, '<span class="bade2-label أعلان">أعلان</span>')
                    .replace(/\[العاب\]/g, '<span class="bade2-label العاب">العاب</span>')
                    .replace(/\[أستفسار\]/g, '<span class="bade2-label أستفسار">أستفسار</span>')
                
        ;$(this).html(updatedHtml);
            });});});

        document.addEventListener("DOMContentLoaded", function() {
                    var conan2000 = [
                        { value: 'conan20000', text: 'اختيار بادئة نصوص' },
                        { value: 'option1', text: '[جديد]' },
                        { value: 'option2', text: '[عاجل]' },
                        { value: 'option3', text: '[حصري]' },
                        { value: 'option4', text: '[تقنية]' },
                        { value: 'option5', text: '[درس]' },
                        { value: 'option6', text: '[ملحق]' },
                        { value: 'option7', text: '[شرح]' },
                        { value: 'option8', text: '[برنامج]' },
                        { value: 'option9', text: '[شكوي]' },
                        { value: 'option10', text: '[هام]' },
                        { value: 'option11', text: '[مخالف]' },
                        { value: 'option12', text: '[قانون]' },
                        { value: 'option13', text: '[أعلان]' },
                        { value: 'option14', text: '[العاب]' },
                        { value: 'option15', text: '[أستفسار]' },
                        { value: 'conan200000', text: 'مسح' }
                    ];
                
                  var $input = document.querySelector('input[name="subject"]');
        var $dropconan2000 = document.createElement('select');
        var $forumButton = document.createElement('button');
        $dropconan2000.classList.add('dropconan2000', 'default'); // Start with default class
        $forumButton.classList.add('dropconan2000-forum', 'default'); // Start with default class
        $forumButton.textContent = 'التبديل الى بادئات نص';
     
        var isConan2000Visible = true;
     
        function populatedropconan2000(options) {
            $dropconan2000.innerHTML = ''; // Clear existing options
            options.forEach(function(option) {
                var opt = document.createElement('option');
                opt.value = option.value;
                opt.textContent = option.text;
                $dropconan2000.appendChild(opt);
            });
        }
        populatedropconan2000(conan2000);
        $forumButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (isConan2000Visible) {
                populatedropconan2000(konan2000);
                $forumButton.textContent = 'بادئة-نص';
                $forumButton.classList.remove('default');
                $forumButton.classList.add('forumd');
                $dropconan2000.classList.remove('default');
                $dropconan2000.classList.add('forumd');
            }
            isConan2000Visible = !isConan2000Visible;
        });
     
        $dropconan2000.addEventListener('change', function() {
            var selectedValue = $dropconan2000.value;
            var selectedText = $dropconan2000.options[$dropconan2000.selectedIndex].text;
            var currentValue = $input.value;
        
            if (selectedValue === 'conan20000') {
                return;
            } else if (selectedValue === 'conan200000') {
                $input.value = '';
            } else {
                if (currentValue) {
                    // Adding selectedText with a leading comma if there are existing words
                    $input.value = selectedText + '' + currentValue;
            } else {
                $input.value = selectedText;
            }
        }
        });
        var container = document.createElement('div');
        container.classList.add('dropconan2000-container');
        container.appendChild($forumButton);
        container.appendChild($dropconan2000);
        $input.parentNode.insertBefore(container, $input.nextSibling);
    });
     
     

        document.write('<style type="text/css">
    .dropconan2000-forum.default,.dropconan2000.default{color:#000;cursor:pointer;}
    .dropconan2000-forum.forumd,.dropconan2000.forumd{color:#fff;cursor:pointer;}
    .dropconan2000.default, .dropconan2000.forumd{height:40px;}
    button.dropconan2000-forum.default{display:none;}
    select.dropconan2000.default{margin:0px;margin-bottom:0px;margin-right:10px;}
    button.dropconan2000-forum.forumd,button.dropconan2000-forum.default{padding:10px;border-radius:10px;margin-bottom:5px;margin-right:5px;}
    .dropconan2000-container{display:inline-block;} </style>');

$(document).ready(function() {
    var currentPath = window.location.pathname;
    $('ul.nav-linkss a, ul.chatcavo a').removeClass('active');
    $('ul.nav-linkss a, ul.chatcavo a').each(function() {
        var href = $(this).attr('href');
        var linkPath = href.split('?')[0];
        if (currentPath === linkPath) {
            $(this).addClass('active');
        }
    });
});

$(function() {
        // تغليف كل حقل كلمة مرور في حاوية جديدة إذا لم يكن قد تم تغليفه بالفعل
        $('input[type="password"], input[name="cur_password"], input[name="new_password"], input[name="password_confirm"]').each(function() {
            if (!$(this).parent().hasClass('password-wrapper')) {
                $(this).wrap('<div class="password-wrapper"></div>');
            }
            // إضافة أيقونة التبديل داخل حقل كلمة المرور
            if ($(this).siblings('.toggle-password').length === 0) {
                $(this).after('<i class="toggle-password far fa-eye"></i>');
            }
        });

        // التعامل مع النقر على الأيقونة لتبديل إظهار كلمة المرور
        $(document).on("click", ".toggle-password", function() {
            var passwordField = $(this).siblings('input[name="password"], input[name="cur_password"], input[name="new_password"], input[name="password_confirm"]');
            var isPasswordVisible = passwordField.attr('type') === 'text';

            if (isPasswordVisible) {
                passwordField.prop("type", "password");
                $(this).removeClass('fa-eye-slash').addClass('fa-eye');
            } else {
                passwordField.prop("type", "text");
                $(this).removeClass('fa-eye').addClass('fa-eye-slash');
            }
        });
    });

$(function() {
        if (_userdata["session_logged_in"] == "0") {
            /* PERSONNALISATION DES TEXTES */
            var txt_username = "اسم المستخدم",
                txt_password = "كلمة السر",
                txt_login = "تسجيل دخول",
                txt_remember = "دخول تلقائي",
                txt_guest = "ليس لديك حساب بعد ؟",
                txt_create = "تسجيل حساب جديد",
                txt_lost = "هل نسيت كلمة السر ؟",
                txt_recover = "استرجع كلمة السر";
/* END OF PERSONALISATION - Do not modify the code below */
   
          $('body').prepend('<div id="quickloginform_overlay" style="display:none;z-index:2147483647"></div><div id="quickloginform" style="display:none;z-index:2147483647"><form id="fa-login-formff" class="login-form"  name="form_login" method="post" action="/login" style="padding: 18px !important;"><h4>تسجيل دخول</h4><input style="padding-top: 8px; padding-bottom: 8px; font-family:Droid Arabic Kufi,Tahoma; min-inline-size: -moz-available; min-inline-size: -webkit-fill-available; text-align: center; border-radius: 5px;width: 324px !important;" class="inputbox autowidth" type="text" maxlength="40" name="username" placeholder="' + txt_username + '" required=""><input style="padding-top: 8px; padding-bottom: 8px; font-family:Droid Arabic Kufi,Tahoma; text-align: center; min-inline-size: -moz-available; min-inline-size: -webkit-fill-available;border-radius:5px;width:324px !important;" class="inputbox autowidth" type="password" maxlength="32" name="password" placeholder="' + txt_password + '" required=""><button style="font-family:Droid Arabic Kufi,Tahoma; opacity:0.8; font-size:12px; padding-right: 105px 0; margin-right: 45px!important; display:inline-block; vertical-align: middle; padding-left: 82px; padding-right: 80px;" class="button1" name="login">' + txt_login + '</button><label><p style="color:#5C5C5C; margin-top: 0px;">' + txt_remember + ' <input type="checkbox"  name="autologin"></p></label><p style="color:#5C5C5C; float:left; text-align:left;">' + txt_guest + '<br><a href="/register">' + txt_create + '</a></p><p style="color:#5C5C5C; float:right; text-align:right;">' + txt_lost + '<br><a href="/profile?mode=sendpassword">' + txt_recover + '</a></p><div style="clear:both;"></div><input name="redirect" value="' + window.location.pathname + '" type="hidden"></form></div>');
   
            $('a[href*="/login"]').click(function() {
                $('#quickloginform, #quickloginform_overlay').fadeIn();
                $('#quickloginform input[name="username"]').focus();
                return false;
            });
   
            $(document).click(function(e) {
                if ($(e.target).closest('#quickloginform form').length === 0) {
                    $('#quickloginform, #quickloginform_overlay').fadeOut();
                }
            });
            $(document).keyup(function(e) {
                if (e.keyCode == 27) {
                    $('#quickloginform, #quickloginform_overlay').fadeOut();
                }
            });
        }
    });

/** * Transiçمo ao Entrar e Sair das Pلginas * Versمo: Todas * Autor: Kyo Panda * */ var both, hidden, show, speed; both = {    'position': 'relative',    'overflow-x': 'hidden'}; hidden = {    'opacity': '0',    'left' : '200px'}; show = {    'opacity': '1',    'left': '0px'}; speed = 250; $('<style>', {    'type': 'text/css',    'text': 'body { ' + $.map($.extend(both, hidden), function(value, key) {        return key + ':' + value;    }).join(';') + '}'}).appendTo('head'); $(function() {    $('body').animate(show, speed);    $(window).on('beforeunload', function() {        $('body').animate(hidden, speed);    });});

window.addEventListener('DOMContentLoaded', function() {
  var messageElement = document.createElement('div');
  messageElement.id = 'connection-message';
  messageElement.innerHTML = 'أنتبه: تم قطع الاتصال بالإنترنت';
  messageElement.style.cssText = `
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
   background:black;
    color: #fffdeb;
    font-size:16px;
    font-weight: bold;
    padding: 10px;
    text-align: center;
    z-index: 9999;
    display: none;
  `;
  document.body.appendChild(messageElement);
  function showMessage() {
    messageElement.style.display = 'block';
    messageElement.style.animation = 'slideIn 0.5s ease-in-out';
  }
  function hideMessage() {
    messageElement.style.animation = 'slideOut 0.5s ease-in-out';
    setTimeout(function() {
      messageElement.style.display = 'none';
    }, 500);
  }
  window.addEventListener('offline', showMessage);
  window.addEventListener('online', hideMessage);
  function animate(element, animationName) {
    element.style.animationName = animationName;
    setTimeout(function() {
      element.style.animationName = '';
    }, 1000);
  }
  var slideInAnimation = `
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  var slideOutAnimation = `
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  `;
  messageElement.addEventListener('animationstart', function() {
    if (messageElement.style.animationName === slideInAnimation) {
      animate(messageElement, slideOutAnimation);
    }
  });
});

!window.fa_mentionner && !/\/privmsg|\/profile\?mode=editprofile&page_profil=signature/.test(window.location.href) && $(function(){$(function(){
      'SCEDITOR @HANDLE AUTO-SUGGEST';
      'DEVELOPED BY ANGE TUTEUR';
      'NO DISTRIBUTION WITHOUT CONSENT OF THE AUTHOR';
      'ORIGIN : https://bayut.yoo7.com/t434-topic#460';
  
      var container = $('.sceditor-container')[0],
          text_editor = document.getElementById('text_editor_textarea'),
          frame,
          instance;
  
      if (container && text_editor) {
  
        frame = $('iframe', container);
        instance = $(text_editor).sceditor('instance');
  
        window.fa_mentionner = {
          suggest_delay : 100, // delay before suggestions show up (100ms)
  
          // language presets
          lang : {
            placeholder : 'بحث...',
            not_found : 'العضو غير موجود'
          },
  
          // colors of the suggestion popup
          color : {
                  font : '#333',
            hover_font : '#FFF',
            error_font : '#F00',
  
                  background : '#FFF',
            hover_background : '#69C',
  
            border : '#CCC',
            shadow : 'rgba(0, 0, 0, 0.176)'
          },
  
          // sceditor instance and rangeHelper
          instance : instance,
          rangeHelper : instance.getRangeHelper(),
  
          // cached nodes for listening and modifications
          frame : frame[0],
          body : frame.contents().find('body')[0],
          textarea : $('textarea', container)[0],
  
          // faux textarea and suggestion list
          faux_textarea : $('<div id="faux_text_editor" />')[0], // helps us mirror the cursor position in source mode
          list : $('<div id="fa_mention_suggestions" style="position:absolute;" />')[0],
  
          // version specific selectors
          selectors : $('.bodyline')[0] ? ['a.gen[href^="/u"]', '.avatar.mini a'] :
                      document.getElementById('ipbwrapper') ? ['.membername', '.mini-avatar'] :
                      null,
  
  
          // adjusts the scroll position of the faux textarea so the caret stays in line
          adjustScroll : function() {
            fa_mentionner.faux_textarea.scrollTop = fa_mentionner.textarea.scrollTop;
          },
  
  
          // updates the content in the faux textarea
          updateFauxTextarea : function(active, key) {
            if (key == 16) { // 16 = SHIFT
              return; // return when specific keys are pressed
            }
  
            // clear suggestion queue when suggestions aren't active
            if (active != true) {
              fa_mentionner.clearSuggestions();
            } else {
              return; // return when interactive keys are pressed while suggesting ; up, down, enter
            }
  
            // use another method if in WYSIWYG mode
            if (!fa_mentionner.instance.inSourceMode()) {
              key != 32 ? fa_mentionner.searchWYSIWYG() : fa_mentionner.clearSuggestions();
              return;
            }
  
            var val = fa_mentionner.instance.val(),
                range = 0,
                selection,
                faux_caret,
                username;
  
            // get the position of the caret
            if (document.selection) {
              selection = document.selection.createRange();
              selection.moveStart('character', -fa_mentionner.textarea.length);
              range = selection.text.length;
            } else if (fa_mentionner.textarea.selectionStart || fa_mentionner.textarea.selectionStart == 0) {
              range = fa_mentionner.textarea.selectionStart;
            }
  
            // set the position of the caret
            val = val.slice(0, range) + '{FAUX_CARET}' + val.slice(range, val.length);
  
            // parse and sanitize the faux textarea content
            $(fa_mentionner.faux_textarea).html(
              val.replace(/</g, '<')
                .replace(/>/g, '>')
                .replace(/@"(.*?)"|@(.*?)(?:\s|\r|\n|$)/g, function(M, $1, $2) {
                  var lastChar = M.substr(-1),
                      name = ($1 || $2 || '').replace(/\{FAUX_CARET\}|"/g, '');
  
                  return '<a href="#' + name + '">' + (/\s|\r|\n/.test(M) ? M.slice(0, M.length - 1) + '</a>' + lastChar : M + '</a>');
                })
                .replace(/\{FAUX_CARET\}/, '<span id="faux_caret" style="position:absolute;margin-left:-3px;">|</span>')
            );
  
            faux_caret = document.getElementById('faux_caret');
  
            // mentions are parsed as <a>nchors, so when the faux caret is inside one we'll show some suggestions
            if (faux_caret && faux_caret.parentNode.tagName == 'A') {
              fa_mentionner.value = val;
  
              fa_mentionner.delay = window.setTimeout(function() {
                fa_mentionner.suggest(faux_caret.parentNode.href.replace(/.*?#(.*)/, '$1'), $(faux_caret).offset());
              }, fa_mentionner.suggest_delay);
  
            }
  
            fa_mentionner.adjustScroll();
          },
  
  
          // search for active mentions in wysiwyg mode
          searchWYSIWYG : function() {
            var selected = fa_mentionner.rangeHelper.cloneSelected(),
                mentions = selected.startContainer.data && selected.startContainer.data.match(/(@".*?")|(@.*?)(?:\s|\r|\n|$)/g),
                offset,
                offset_marker,
                hit,
                i;
  
                console.log(mentions);
  
            if (mentions && mentions[0]) {
  
              // clean up whitespace
              for (i in mentions) {
                mentions[i] = mentions[i].replace(/\s$/g, '');
              }
  
              // search for the mention that's currently being modified
              for (i in mentions) {
                if (!fa_mentionner.wysiwyg_mentions || (mentions[i] != fa_mentionner.wysiwyg_mentions[i])) {
                  hit = true;
  
                  fa_mentionner.delay = window.setTimeout(function() {
                    fa_mentionner.rangeHelper.insertMarkers(); // insert markers to help get the caret offset
  
                    offset = $(fa_mentionner.frame).offset();
                    offset_marker = $('#sceditor-end-marker', fa_mentionner.body).show().offset();
  
                    // add the marker offsets to the iframe offsets
                    offset.left += offset_marker.left;
                    offset.top += offset_marker.top - fa_mentionner.body.scrollTop;
  
                    fa_mentionner.suggest(mentions[i].slice(1).replace(/^"|"$/g, ''), offset, true);
                    fa_mentionner.wysiwyg_active = mentions[i]; // save the active mention for later use in finish()
                  }, fa_mentionner.suggest_delay);
  
                  break;
                }
              }
  
              // hide the suggestion list if there's no newly modified mentions
              if (!hit) {
                fa_mentionner.list.style.display = 'none';
                fa_mentionner.focused = null;
              }
  
              fa_mentionner.wysiwyg_mentions = mentions; // update the list of mentions
  
            }
          },
  
          // suggest a list of users based on the passed username
          suggest : function(username, offset, wysiwyg) {
  
            // insert the suggestion list to show that it's searching
            fa_mentionner.list.innerHTML = '<span class="fam-info">' + fa_mentionner.lang.placeholder + '</span>';
            $(fa_mentionner.list).css({
              left : offset.left + 'px',
              top : offset.top + 'px',
              display : 'block',
              overflowY : 'auto'
            });
  
            document.body.appendChild(fa_mentionner.list);
  
            // send a query request to the memeberlist to find users who match the typed username
            fa_mentionner.request = $.get('/memberlist?username=' + username, function(d) {
              fa_mentionner.request = null;
  
              var suggestion = $(fa_mentionner.selectors ? fa_mentionner.selectors[0] : '.avatar-mini a', d),
                  ava = fa_mentionner.selectors ? $(fa_mentionner.selectors[1], d) : null,
                  i = 0,
                  j = suggestion.length,
                  name;
  
              fa_mentionner.list.innerHTML = '';
  
              if (j) {
                for (; i < j; i++) {
                  name = $(suggestion[i]).text().replace(/^\s+|\s+$/g, '');
  
                  fa_mentionner.list.insertAdjacentHTML('beforeend',
                    '<a href="javascript:fa_mentionner.finish(\'' + name.replace(/'/g, '\\\'') + '\', ' + wysiwyg + ');" class="fa_mention_suggestion">'+
                      '<img class="fa_suggested_avatar" src="' + $(fa_mentionner.selectors ? ava[i] : suggestion[i]).find('img').attr('src') + '"/>'+
                      '<span class="fa_suggested_name">' + name + '</span>'+
                    '</a>'
                  );
                }
  
                // change overflowY property when it exceeds 7 suggestions -- prevents unsightly scroll bug
                fa_mentionner.list.style.overflowY = j > 7 ? 'scroll' : 'auto';
  
                // update the focused suggestion and scroll it into view
                fa_mentionner.list.firstChild.className += ' fam-focus';
                fa_mentionner.focused = fa_mentionner.list.firstChild;
                fa_mentionner.scrollSuggestions();
  
              } else {
                fa_mentionner.list.innerHTML = '<span class="fam-info" style="color:' + fa_mentionner.color.error_font + ';">' + fa_mentionner.lang.not_found + '</span>';
              }
  
            });
          },
  
  
          // kill the suggestion timeout while typing persists
          clearSuggestions : function() {
            if (fa_mentionner.delay) {
              window.clearTimeout(fa_mentionner.delay);
              fa_mentionner.delay = null;
  
              fa_mentionner.list.style.display = 'none';
              fa_mentionner.focused = null;
            }
  
            if (fa_mentionner.request) {
              fa_mentionner.request.abort();
              fa_mentionner.request = null;
            }
          },
  
  
          // finish the username
          finish : function(username, wysiwyg) {
            var mention, index, i;
  
            // hide and clear suggestions
            fa_mentionner.clearSuggestions();
            fa_mentionner.focused = null;
            fa_mentionner.list.style.display = 'none';
  
            if (!wysiwyg) {
              fa_mentionner.value = fa_mentionner.value.replace(/(?:@".[^"]*?\{FAUX_CARET\}.*?"|@\{FAUX_CARET\}.*?(\s|\n|\r|$)|@.[^"\s]*?\{FAUX_CARET\}.*?(\s|\n|\r|$))/, function(M, $1, $2) {
                mention = '@"' + username + '"';
                return '{MENTION_POSITION}' + ( $1 ? $1 : $2 ? $2 : '' );
              });
  
              // get the index where the mention should be
              index = fa_mentionner.value.indexOf('{MENTION_POSITION}');
              fa_mentionner.value = fa_mentionner.value.replace('{MENTION_POSITION}', '');
  
              // save current scroll position for application after the value has been updated
              fa_mentionner.scrollIndex = fa_mentionner.textarea.scrollTop;
  
              // update the textarea with the completed mention
              fa_mentionner.instance.val('');
              fa_mentionner.instance.insert(fa_mentionner.value.slice(0, index) + mention, fa_mentionner.value.slice(index, fa_mentionner.value.length));
  
              // restore the scroll position for the textareas
              fa_mentionner.textarea.scrollTop = fa_mentionner.scrollIndex;
              fa_mentionner.adjustScroll();
  
              // update the fake textarea
              fa_mentionner.updateFauxTextarea();
  
            } else {
              // save the caret range in WYSIWYG so we can restore it after replacing the HTML
              fa_mentionner.rangeHelper.saveRange();
              fa_mentionner.body.innerHTML = fa_mentionner.body.innerHTML.replace(new RegExp(fa_mentionner.wysiwyg_active.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '(<span.*?id="sceditor-end-marker".*?>)'), '@"' + username + '"$1');
              fa_mentionner.body.focus();
              fa_mentionner.rangeHelper.restoreRange();
  
              // update the wysiwyg mention array so no new suggestions appear
              for (i in fa_mentionner.wysiwyg_mentions) {
                if (fa_mentionner.wysiwyg_mentions[i] == fa_mentionner.wysiwyg_active) {
                  fa_mentionner.wysiwyg_mentions[i] = '@"' + username + '"';
                  break;
                }
              }
            }
          },
  
  
          // scroll the selected suggestion into view
          scrollSuggestions : function() {
            $(fa_mentionner.list).scrollTop(
              (
                $(fa_mentionner.focused).offset().top -
                $(fa_mentionner.list).offset().top +
                $(fa_mentionner.list).scrollTop()
              ) -
  
              (26 * 3) // 26 = the height of the suggestions, so display 3 suggestions above while scrolling
            );
          }
        };
  
        // get computed styles for the textarea and apply them to the faux textarea
        for (var css = window.getComputedStyle(fa_mentionner.textarea, null), i = 0, j = css.length, str = ''; i < j; i++) {
          str += css[i] + ':'  + css.getPropertyValue(css[i]) + ';';
        }
  
        // add styles to the head
        $('head').append('<style type="text/css">'+
          '#faux_text_editor {' + str + '}'+
          '#faux_text_editor { position:absolute; left:0; bottom:0; z-index:-1; visibility:hidden; display:block; overflow-y:auto; }'+
          '#fa_mention_suggestions { color:' + fa_mentionner.color.font + '; font-size:10px; font-family:arial, verdana, sans-serif; background:' + fa_mentionner.color.background + '; border:1px solid ' + fa_mentionner.color.border + '; margin-top:20px; z-index:999; max-height:182px; overflow-x:hidden; box-shadow:0 6px 12px ' + fa_mentionner.color.shadow + '; }'+
          'a.fa_mention_suggestion, .fam-info { color:' + fa_mentionner.color.font + '; height:26px; line-height:26px; padding:0 3px; display:block; white-space:nowrap; cursor:pointer; }'+
          'a.fa_mention_suggestion.fam-focus { color:' + fa_mentionner.color.hover_font + '; background:' + fa_mentionner.color.hover_background + '; }'+
          '.fa_suggested_avatar { height:20px; width:20px; vertical-align:middle; margin-right:10px; margin-top: 3px; float: left;}'+
        '</style>');
  
        // insert faux textarea into document
        fa_mentionner.textarea.parentNode.insertBefore(fa_mentionner.faux_textarea, fa_mentionner.textarea);
  
        // apply event handlers
        fa_mentionner.textarea.onclick = fa_mentionner.updateFauxTextarea;
        fa_mentionner.textarea.onscroll = fa_mentionner.adjustScroll;
  
        // update the faux textarea on keyup
        fa_mentionner.instance.keyUp(function(e) {
          if (fa_mentionner.focused && e && (e.keyCode == 13 || e.keyCode == 38 || e.keyCode == 40)) {
            fa_mentionner.updateFauxTextarea(true, e.keyCode);
            return false;
          } else {
            fa_mentionner.updateFauxTextarea(false, e.keyCode);
          }
        });
  
        // key events for the suggested mentions
        $([document, fa_mentionner.body]).on('keydown', function(e) {
          var that = e.target;
  
          if (fa_mentionner.focused && e && e.keyCode && (that.tagName == 'TEXTAREA' || that.tagName == 'BODY')) {
  
            // move selection down
            if (e.keyCode == 40) {
              var next = fa_mentionner.focused.nextSibling;
  
              if (next) {
                $(fa_mentionner.focused).removeClass('fam-focus');
                next.className += ' fam-focus';
                fa_mentionner.focused = next;
  
                fa_mentionner.scrollSuggestions();
              }
  
              return false;
            }
  
            // move selection up
            if (e.keyCode == 38) {
              var prev = fa_mentionner.focused.previousSibling;
  
              if (prev) {
                $(fa_mentionner.focused).removeClass('fam-focus');
                prev.className += ' fam-focus';
                fa_mentionner.focused = prev;
  
                fa_mentionner.scrollSuggestions();
              }
  
              return false;
            }
  
            // apply selection
            if (e.keyCode == 13) {
              fa_mentionner.focused.click();
              return false;
            }
  
          }
        });
  
        // update focused suggestion on hover
        $(document).on('mouseover', function(e) {
          var that = e.target;
  
          if (/fa_mention_suggestion/.test(that.className)) {
            $(fa_mentionner.focused).removeClass('fam-focus');
            that.className += ' fam-focus';
            fa_mentionner.focused = that;
          }
        });
      }
    })});

$(function() {
      if (!$.sceditor) return;
     
      $.sceditor.command.set('messages', {
        dropDown : function(editor, caller, callback) {
          var messages = {
            'بسم الله...' : 'بسم الله الرحمن الرحيم',
            'السلام...' : 'السلام عليكم ورحمة الله وبركاته',
            'شُكرآ' : 'شُكرآ جزيلا',
            'بارك...' : 'بارك الله فيك',
            'جزاك...' : 'جزاك الله خير',
            'شُكرآ على...' : 'شُكرآ لك على المرور',
            'في رعاية...' : 'في رعاية الله',
    'مع السلامه...' : 'مع السلامه'
          },
          a, d = document.createElement('DIV'), i;
     
          for (i in messages) {
            a = document.createElement('A');
            a.className = 'sceditor-font-option';
            a.title = messages[i];
            a.innerHTML = i;
            a.onclick = function() {
              callback(this.title);
              editor.closeDropDown(true);
              return false;
            };
            d.appendChild(a);
          }
     
          editor.createDropDown(caller, 'messages', d);
        },
     
        exec : function(c) {
          var e = this;
          $.sceditor.command.get('messages').dropDown(e, c, function(content) {
            e.insertText(content);
          });
        },
     
        txtExec : function(c) {
          var e = this;
          $.sceditor.command.get('messages').dropDown(e, c, function(content) {
            e.insertText(content);
          });
        },
     
        tooltip : 'ردود جاهزة'
      });
     
      toolbar += '|messages'
    });

$.getScript('https://cdn.jsdelivr.net/clipboard.js/1.5.16/clipboard.min.js', function() {
      window.fae_copyCode = {
        copy : 'نسخ الكود',
        copied : 'تم النسخ!'
      };
     
      $(function() {
        var a = $('.codebox dt, .codebox p').not('.spoiler > dt, .hidecode > dt'),
            i = 0,
            j = a.length;
     
        if (a[0]) {
          $('head').append('<style type="text/css">.fae_copy-code{float:right;cursor:pointer;color: #444;}.fae_copy-code:hover{text-decoration:auto;}</style>');
     
          for (; i < j; i++) {
            a[i].insertAdjacentHTML('beforeend', '<span class="fae_copy-code">' + fae_copyCode.copy + '</span>');
          }
     
          new Clipboard('.fae_copy-code',{
            target : function (copy) {
              if (copy.innerHTML != fae_copyCode.copied) {
                return $(copy).closest('.codebox').find('.cont_code, code')[0];
              }
            }
     
          }).on('success', function (e) {
            var copy = e.trigger;
     
            if (copy.innerHTML != fae_copyCode.copied) {
              copy.innerHTML = fae_copyCode.copied;
              copy.className += ' fae_copied';
     
              window.setTimeout(function() {
                copy.innerHTML = fae_copyCode.copy;
                copy.className = copy.className.replace('fae_copied', '');
              }, 1000);
            }
     
            e.clearSelection();
          });
        }
     
      });
    });
$(function(){
  if (!$.sceditor) return;
  var defaultSize = 18, // taille par défaut des icônes
      autoClose = 1, // ferme automatiquement la popup après la sélection d'une icône si activé
 
      // Liste d'icônes
      fa = ['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',''],
      A = '', O = A;
 
  // si la taille est supérieur à 0, on formate une taille par défaut pour les icônes
  if (defaultSize) {
    A += '[size=' + defaultSize + ']';
    O += '[/size]';
  }
 
  // crée un bouton sur l'éditeur et une fenêtre de sélection
  $.sceditor.command.set('fontawesome', {
   
    dropDown : function(editor, caller, callback) {
      var a, b = '', c = document.createElement('DIV'), i = 0, j = fa.length;
     
      for (; i<j; i++) b += '<i class="fa">' + fa[i] + '</i>';
     
      c.innerHTML = b;
     
      for (a = c.getElementsByTagName('I'), i = 0, j = a.length; i<j; i++) {
        a[i].onclick = function() {
          callback(this.innerHTML);
          autoClose && editor.closeDropDown(true);
        };
      }
 
      editor.createDropDown(caller, 'fontawesome', c);
    },
 
    // wysiwyg
    exec : function(c) {
      var e = this;
      $.sceditor.command.get('fontawesome').dropDown(e, c, function(icon) {
        e.insert(' [font=FontAwesome]' + A + icon + O + '[/font]&nbsp;', '', true, true, true);
      });
    },
   
    // mode source
    txtExec : function(c) {
      var e = this;
      $.sceditor.command.get('fontawesome').dropDown(e, c, function(icon) {
        e.insert(' [font=FontAwesome]' + A + icon + O + '[/font] ', '');
      });
    },
   
    tooltip : 'Font Awesome Icons'
  });
 
  toolbar = toolbar.replace(/date,/,'fontawesome,date,'); // ajoute le bouton à la barre d'outils
});
$(document).ready(function() {

        $("input[name='post']").after($('<input type="button" name="del" class="button1" value="احذف النص" id="dely">'));

        $("#dely").click(function () {
        $(".sceditor-container textarea").val('').focus();
        $("div.sceditor-toolbar + iframe").contents().find("body").empty().focus();
        });

        });
$(function(){
  if (!$.sceditor || /\/privmsg/.test(window.location.pathname)) return;
  var storage = window.localStorage, s = document.createElement('SELECT'), tags = '';
 
 
 if (storage && storage.faTags && storage.faTagsExp >
 +new Date - 29*59*1000 && storage.faTagsUser ==
_userdata.username) s.innerHTML = storage.faTags;
  else {
    $.get('/profile?mode=editprofile&page_profil=tags', function(d) {
      var h = $('form[name="tag_list"] a', d);
    
      if (h.length) {
        for (var i = 0, j = h.length, txt; i<j; i++) {
          txt = h[i].innerHTML.replace(/^\s+|\s+$/g,'');
          if (/^#/.test(txt)) {
            !tags && (tags += '<option value="">إختر هاشتاج</option>');
 
           tags += '<option value="'+ txt.slice(1) +'">' +
(txt.length > 24 ? txt.slice(0, 25) + '...' : txt) +
'</option>';
          }
        }
        s.innerHTML = tags;
      }
    
      if (storage) {
        storage.faTags = tags ? tags : 0;
        storage.faTagsUser = _userdata.username;
        storage.faTagsExp = +new Date;
      }
    });
  }
  
  
  $.sceditor.command.set('hashtag', {
    dropDown : function(editor, caller, callback) {
      var a = document.createElement('DIV'), b = document.createElement('INPUT'), c = document.createElement('INPUT');
      b.type = 'button';
      b.value = 'إدراج';
      b.className = 'button';
    
      c.type = 'text';
      c.id = 'fa-hashtag';
    
 
     a.innerHTML = '<div><label for="fa-hashtag">هاشتاج
:</label></div>' + ( s.innerHTML ?
'<div><label>Followed tags :</label></div>' : ''
 ) + '<div></div>';
      a.firstChild.appendChild(c);
      a.lastChild.appendChild(b);
    
      if (s.innerHTML != 0) {
        s.value = '';
        a.getElementsByTagName('DIV')[1].appendChild(s);
        s.onchange = function() {
          c.value = s.value;
        };
      }
    
      b.onclick = function() {
        c.value && callback(c.value);
        editor.closeDropDown(true);
      };
 
      editor.createDropDown(caller, 'inserthashtag', a);
    },
 
    exec : function(c) { tag(c, this) },
    txtExec : function(c) { tag(c, this) },
  
    tooltip : 'أدخل هاشتاج'
  });
 
  toolbar = toolbar.replace(/quote,/,'hashtag,quote,');
 
  function tag(c, e) {
    $.sceditor.command.get('hashtag').dropDown(e, c, function(tag) {
      e.insertText('#' + tag.replace(/^#/,'').replace(/[\xD7\xF7\x00-\x2F\x3A-\x40\x5B-\x60\x7B-\xBF]/g, '_') + ' ');
    });
  }
});
