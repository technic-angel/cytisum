"use client"

import { faker } from '@faker-js/faker'
import Models from '../../interfaces/chan_interface'

const boards = [
    {
        board: "/a/",
        title: "Anime & Manga",
        ws_board: true,
        max_filesize: 10485760,
        max_comment_chars: 1200,
        bump_limit: 350,
        cooldowns: {
            threads: 60,
            replies: 60,
            images: 120
        },
        meta_description: "The weeb containment board.",
        is_archived: true,
        spoilers: true,
        forced_anon: false,
        code_tags: false,
        webm_audio: true,
        min_image_width: 80,
        min_image_height: 80,
        text_only: false,
        apng: 1,
        svg: 1,
        code_langs: [],
        category: "Media"
    },
    {
        board: "/po/",
        title: "Papercraft & Origami",
        ws_board: true,
        max_filesize: 10485760,
        max_comment_chars: 1200,
        bump_limit: 350,
        cooldowns: {
            threads: 60,
            replies: 60,
            images: 120
        },
        meta_description: "Origami, papercraft, and everything relevant to paper engineering",
        is_archived: true,
        spoilers: true,
        forced_anon: false,
        code_tags: false,
        webm_audio: true,
        min_image_width: 80,
        min_image_height: 80,
        text_only: false,
        apng: 1,
        svg: 1,
        code_langs: [],
        category: "Hobbies & Crafts"
    }
]
export function createRandomPost(replyTo?: number): Models.Post {
    const date = faker.date.past(); 
    return {
        number: faker.number.int(),
        datetime: date.toDateString(),
        name: faker.internet.userName(),
        comment: faker.lorem.paragraph(),
        subject: faker.internet.domainWord(),
        filenames: faker.helpers.multiple(faker.image.urlPicsumPhotos, {count: faker.number.int() % 5}), // up to 5 images
        timestamp: Math.floor(date.getTime() / 1000), // conversion to unix seconds
        reply: replyTo ? replyTo : 0,
        board: boards[faker.number.int() % (boards.length - 1)].title,
        replies: 0,
        images: 0,
        sticky: faker.number.int() % 1 == 0 ? false : true,
        closed: false,
        bumplimit: true,
        archived: false
    };
}

const threads = faker.helpers.multiple(createRandomPost, {count: 100})

const  threadList = [{
    "page":1,
        "threads":[{
            "no":570368,
            "last_modified":1546294897,
            "replies":2
        }
            ,{"no":609376,"last_modified":1705426797,"replies":154},{"no":618073,"last_modified":1705409770,"replies":1},{"no":596701,"last_modified":1705350222,"replies":87},{"no":618077,"last_modified":1705349651,"replies":2},{"no":569063,"last_modified":1705297374,"replies":240},{"no":597408,"last_modified":1705279323,"replies":291},{"no":615534,"last_modified":1705228601,"replies":21},{"no":615541,"last_modified":1705227548,"replies":23},{"no":617733,"last_modified":1705182103,"replies":3},{"no":546816,"last_modified":1705165187,"replies":152},{"no":601036,"last_modified":1705152034,"replies":24},{"no":616182,"last_modified":1705119524,"replies":2},{"no":616157,"last_modified":1705115624,"replies":9},{"no":612645,"last_modified":1704988539,"replies":15}]},{"page":2,"threads":[{"no":618041,"last_modified":1704960568,"replies":1},{"no":614959,"last_modified":1704956200,"replies":11},{"no":582941,"last_modified":1704840669,"replies":241},{"no":614572,"last_modified":1704735321,"replies":7},{"no":616145,"last_modified":1704735175,"replies":33},{"no":616594,"last_modified":1704734989,"replies":13},{"no":611591,"last_modified":1704734891,"replies":6},{"no":608951,"last_modified":1704737662,"replies":16},{"no":617737,"last_modified":1704734639,"replies":6},{"no":547797,"last_modified":1704682857,"replies":156},{"no":599079,"last_modified":1705406503,"replies":315},{"no":613703,"last_modified":1704385882,"replies":183},{"no":612594,"last_modified":1704271148,"replies":4},{"no":616040,"last_modified":1704245531,"replies":9},{"no":611872,"last_modified":1704245531,"replies":3}]},{"page":3,"threads":[{"no":617730,"last_modified":1704242073,"replies":5},{"no":610972,"last_modified":1704237283,"replies":50},{"no":610864,"last_modified":1704210971,"replies":25},{"no":609072,"last_modified":1704210224,"replies":98},{"no":614348,"last_modified":1704087103,"replies":110},{"no":615621,"last_modified":1704046950,"replies":13},{"no":601225,"last_modified":1703980108,"replies":91},{"no":614592,"last_modified":1703889140,"replies":15},{"no":561868,"last_modified":1703714849,"replies":138},{"no":616194,"last_modified":1703648006,"replies":2},{"no":617826,"last_modified":1703631802,"replies":19},{"no":611086,"last_modified":1703566749,"replies":7},{"no":612000,"last_modified":1703543872,"replies":33},{"no":617743,"last_modified":1703383208,"replies":6},{"no":615974,"last_modified":1703372998,"replies":2}]},{"page":4,"threads":[{"no":616475,"last_modified":1703321482,"replies":2},{"no":616977,"last_modified":1703311291,"replies":13},{"no":615094,"last_modified":1703228294,"replies":2},{"no":615714,"last_modified":1703147842,"replies":5},{"no":615446,"last_modified":1703094819,"replies":9},{"no":611100,"last_modified":1703068166,"replies":16},{"no":615412,"last_modified":1703052857,"replies":13},{"no":609650,"last_modified":1702931884,"replies":11},{"no":617411,"last_modified":1702858496,"replies":6},{"no":615979,"last_modified":1702848828,"replies":1},{"no":611307,"last_modified":1702710423,"replies":19},{"no":616189,"last_modified":1702661700,"replies":3},{"no":609903,"last_modified":1702542869,"replies":49},{"no":617695,"last_modified":1702534040,"replies":0},{"no":609615,"last_modified":1703903200,"replies":94}]},{"page":5,"threads":[{"no":614201,"last_modified":1702459000,"replies":13},{"no":614589,"last_modified":1702458936,"replies":39},{"no":613581,"last_modified":1702445402,"replies":14},{"no":615798,"last_modified":1702445209,"replies":24},{"no":616163,"last_modified":1704746885,"replies":13},{"no":617619,"last_modified":1702445054,"replies":1},{"no":617579,"last_modified":1702311117,"replies":1},{"no":617599,"last_modified":1702311047,"replies":1},{"no":615614,"last_modified":1703078964,"replies":5},{"no":616955,"last_modified":1702245557,"replies":6},{"no":593161,"last_modified":1703078972,"replies":52},{"no":612675,"last_modified":1702160875,"replies":4},{"no":617430,"last_modified":1702160367,"replies":2},{"no":614067,"last_modified":1702065327,"replies":202},{"no":612658,"last_modified":1702042208,"replies":16}]},{"page":6,"threads":[{"no":610083,"last_modified":1701954650,"replies":34},{"no":539494,"last_modified":1705293939,"replies":322},{"no":616012,"last_modified":1701894371,"replies":10},{"no":610545,"last_modified":1701889686,"replies":19},{"no":616003,"last_modified":1701889502,"replies":3},{"no":609884,"last_modified":1701889495,"replies":5},{"no":612288,"last_modified":1701889244,"replies":67},{"no":615657,"last_modified":1701889147,"replies":2},{"no":615472,"last_modified":1701889131,"replies":9},{"no":612446,"last_modified":1701889127,"replies":33},{"no":615963,"last_modified":1701889123,"replies":5},{"no":612932,"last_modified":1701888841,"replies":2},{"no":612407,"last_modified":1701888667,"replies":4},{"no":610633,"last_modified":1701888125,"replies":5},{"no":611094,"last_modified":1701888171,"replies":7}]},{"page":7,"threads":[{"no":615564,"last_modified":1701888166,"replies":5},{"no":612366,"last_modified":1701888163,"replies":4},{"no":610792,"last_modified":1701887303,"replies":30},{"no":611714,"last_modified":1701887211,"replies":14},{"no":611790,"last_modified":1701887157,"replies":28},{"no":611311,"last_modified":1701886944,"replies":11},{"no":616071,"last_modified":1701887003,"replies":1},{"no":616454,"last_modified":1701886996,"replies":10},{"no":616044,"last_modified":1701886993,"replies":7},{"no":615535,"last_modified":1701886971,"replies":3},{"no":610467,"last_modified":1701886969,"replies":10},{"no":602191,"last_modified":1701886964,"replies":21},{"no":609340,"last_modified":1701886523,"replies":7},{"no":612692,"last_modified":1701886520,"replies":72},{"no":614335,"last_modified":1701886515,"replies":9}]},{"page":8,"threads":[{"no":603976,"last_modified":1701886070,"replies":25},{"no":617369,"last_modified":1701886070,"replies":2},{"no":610368,"last_modified":1704966501,"replies":23},{"no":591172,"last_modified":1701886070,"replies":95},{"no":597271,"last_modified":1701885331,"replies":51},{"no":566458,"last_modified":1701885341,"replies":273},{"no":608633,"last_modified":1701885345,"replies":9},{"no":615797,"last_modified":1701885079,"replies":13},{"no":616495,"last_modified":1701885040,"replies":52},{"no":617285,"last_modified":1701885044,"replies":4},{"no":617372,"last_modified":1701885052,"replies":5},{"no":611036,"last_modified":1701885057,"replies":8},{"no":612691,"last_modified":1701885060,"replies":6},{"no":601798,"last_modified":1701885063,"replies":166},{"no":609711,"last_modified":1701884621,"replies":22}]},{"page":9,"threads":[{"no":574188,"last_modified":1701884771,"replies":236},{"no":610550,"last_modified":1701884498,"replies":13},{"no":614782,"last_modified":1702932457,"replies":38},{"no":611378,"last_modified":1704318315,"replies":339},{"no":609763,"last_modified":1701113662,"replies":26},{"no":612353,"last_modified":1700867046,"replies":21},{"no":617107,"last_modified":1700780951,"replies":4},{"no":616043,"last_modified":1700780048,"replies":1},{"no":614906,"last_modified":1701189419,"replies":3},{"no":547093,"last_modified":1700234027,"replies":168},{"no":604751,"last_modified":1700137514,"replies":41},{"no":604897,"last_modified":1699867947,"replies":37},{"no":587263,"last_modified":1699801668,"replies":105},{"no":614819,"last_modified":1699585681,"replies":2},{"no":612122,"last_modified":1699462736,"replies":15}]},{"page":10,"threads":[{"no":616433,"last_modified":1698746454,"replies":3},{"no":608834,"last_modified":1698621745,"replies":35},{"no":616171,"last_modified":1698534598,"replies":6},{"no":616749,"last_modified":1698438127,"replies":1},{"no":609748,"last_modified":1698389005,"replies":101},{"no":616801,"last_modified":1698190901,"replies":7},{"no":616134,"last_modified":1703274006,"replies":16},{"no":612044,"last_modified":1701412260,"replies":54},{"no":616692,"last_modified":1697679391,"replies":4},{"no":616628,"last_modified":1697252231,"replies":7},{"no":608674,"last_modified":1697065323,"replies":17},{"no":615837,"last_modified":1697045982,"replies":16},{"no":616527,"last_modified":1696608984,"replies":5},{"no":610086,"last_modified":1696367809,"replies":9},{"no":615643,"last_modified":1696272448,"replies":4}]},{"page":11,"threads":[{"no":609780,"last_modified":1696195574,"replies":8},{"no":546973,"last_modified":1705428724,"replies":591}]}]

const index = {
    "threads":[
        {
            "posts":
                [
                    {
                        "no":618041,
                        "now":"01\/11\/24(Thu)03:00:36",
                        "name":"Anonymous",
                        "sub":"Making some paper stars.",
                        "com":"I had something major planned this year during the summer but recent events have been making it seem more and more unlikely. In the meantime, I will make some stars each day until the time has come. Here\u2019s the first ones.",
                        "filename":"IMG_6321",
                        "ext":".jpg",
                        "w":2605,
                        "h":2463,
                        "tn_w":250,
                        "tn_h":236,
                        "tim":1704960036973438,
                        "time":1704960036,
                        "md5":"Wn9bWjGTRfhYgy48nJW\/vg==",
                        "fsize":820502,"resto":0,
                        "bumplimit":0,
                        "imagelimit":0,
                        "semantic_url":"making-some-paper-stars",
                        "replies":1,"images":1
                    },
                        {"no":618042,"now":"01\/11\/24(Thu)03:09:28","name":"Anonymous","com":"<a href=\"#p618041\" class=\"quotelink\">&gt;&gt;618041<\/a><br>I&#039;m sure everyone knows how these work but in case someone else sees this and wants to give it a try","filename":"tempsnip","ext":".png","w":678,"h":938,"tn_w":90,"tn_h":125,"tim":1704960568504876,"time":1704960568,"md5":"Or8BfUnyc0ogFugR0TtP3A==","fsize":98026,"resto":618041}]},{"posts":[{"no":614959,"now":"07\/15\/23(Sat)02:29:36","name":"kuzzzma","sub":"Oppenheimer papertoy","com":"I&#039;ve made several custom paperized papertoys, based on upcoming Oppenheimer film.<br>First one up is J.Robert Oppenheimer as played by Cillian Murphy.<br><br>Download PDF here: https:\/\/www.blog.private-universe.n<wbr>et\/2023\/07\/13\/papercraft-paperized-<wbr>oppenheimer-papertoy-trinity-site-v<wbr>ersion\/","filename":"Oppenheimer_preview","ext":".jpg","w":750,"h":584,"tn_w":250,"tn_h":194,"tim":1689402576385764,"time":1689402576,"md5":"6QGF1OjFnSlXK9Ke0M2mUA==","fsize":274686,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"oppenheimer-papertoy","replies":11,"images":8,"omitted_posts":6,"omitted_images":4},{"no":616428,"now":"09\/29\/23(Fri)17:46:24","name":"Anonymous","com":"<a href=\"#p615124\" class=\"quotelink\">&gt;&gt;615124<\/a><br>Nice","time":1696023984,"resto":614959},{"no":616849,"now":"10\/28\/23(Sat)09:55:28","name":"kuzzzma","com":"I&#039;ve started series of Good Omens papertoys with versions of main characters from TV-show (they are a birthday gift for a friend).<br>I plan to make book versions too later.<br><br>Download here: https:\/\/www.blog.private-universe.n<wbr>et\/series\/good-omens-papertoys\/","filename":"good-omens-aziraphale-crowley-tv-twitter_preview2","ext":".jpg","w":1200,"h":639,"tn_w":125,"tn_h":66,"tim":1698501328327643,"time":1698501328,"md5":"oY5Ly+YpX2dm\/XKBltmaLQ==","fsize":274826,"resto":614959},{"no":617045,"now":"11\/16\/23(Thu)08:16:59","name":"kuzzzma","com":"Papertoys of characters from Good Omens book, inspired by book covers and fanart.<br>Crowley: https:\/\/www.blog.private-universe.n<wbr>et\/2023\/11\/13\/papercraft-paperized-<wbr>good-omens-crowley-papertoy-book-ve<wbr>rsion\/<br>Aziraphale: https:\/\/www.blog.private-universe.n<wbr>et\/2023\/11\/16\/papercraft-paperized-<wbr>good-omens-aziraphale-papertoy-book<wbr>-version\/","filename":"good-omens-aziraphale-crowley-book_preview1","ext":".jpg","w":750,"h":569,"tn_w":125,"tn_h":94,"tim":1700140619661178,"time":1700140619,"md5":"4eSG7PYuRcUpIZ7ClluqCA==","fsize":171679,"resto":614959},{"no":617109,"now":"11\/23\/23(Thu)12:52:53","name":"kuzzzma","com":"Latest addition to my collection of Paperized customs - &quot;Our Flag Means Death&quot; main characters.<br>This was a commission from a fan of the show, who wanted to give smth back to the fandom in thanks for keeping them sane through 2022-2023.<br><br><br>Download free PDFs: https:\/\/www.blog.private-universe.n<wbr>et\/series\/our-flag-means-death-pape<wbr>rtoys\/","filename":"ofmd-stede-ed_preview1","ext":".jpg","w":750,"h":569,"tn_w":125,"tn_h":94,"tim":1700761973583623,"time":1700761973,"md5":"T9mNRuo0rUqs2wzcj3N3pQ==","fsize":306009,"resto":614959},{"no":618040,"now":"01\/11\/24(Thu)01:56:40","name":"kuzzzma","com":"Recently I reworked my Tenet papertoys<br>Download free PDF here: https:\/\/www.blog.private-universe.n<wbr>et\/series\/tenet-papertoys\/","filename":"tenet_protagonist-neil_preview_02","ext":".jpg","w":750,"h":569,"tn_w":125,"tn_h":94,"tim":1704956200035333,"time":1704956200,"md5":"wrw\/n5iMsVEEki3UnTDszQ==","fsize":219703,"resto":614959}]},{"posts":[{"no":582941,"now":"05\/26\/20(Tue)20:27:08","name":"Anonymous","sub":"LFT: Let&#039;s Fold Together","com":"Previous thread&#039;s life finally ended after 3 years. <span class=\"deadlink\">&gt;&gt;553409<\/span><br>Let&#039;s start a new one!","filename":"Mythological creatures &amp; the chinese zodiac in origami","ext":".pdf","w":1,"h":1,"tn_w":196,"tn_h":250,"tim":1590539228594,"time":1590539228,"md5":"xVx3lqzPO\/hbPZmy6BtlLg==","fsize":6436119,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"lft-lets-fold-together","replies":241,"images":91,"omitted_posts":236,"omitted_images":91},{"no":617299,"now":"11\/27\/23(Mon)07:27:30","name":"Anonymous","com":"<a href=\"#p617284\" class=\"quotelink\">&gt;&gt;617284<\/a><br>if you have the u-form of 52 and follow the mountain and valley folds in 53 you should come to 54 naturally","time":1701088050,"resto":582941},{"no":618000,"now":"01\/08\/24(Mon)06:24:15","name":"Anonymous","com":"I try to fold Sea Serpent but I am stuck at point 16 (Pull out the white paper from behind) on page 71...<br>There is no way to pull paper, it is quite stuck from previous folds.<br>Could anyone please help?","time":1704713055,"resto":582941},{"no":618015,"now":"01\/08\/24(Mon)19:41:12","name":"Anonymous","com":"i need help with the rabbit step 28-29. image is too pixelated cant figure it out","time":1704760872,"resto":582941},{"no":618016,"now":"01\/08\/24(Mon)20:30:04","name":"Anonymous","com":"<a href=\"#p618015\" class=\"quotelink\">&gt;&gt;618015<\/a><br>Check <a href=\"#p615226\" class=\"quotelink\">&gt;&gt;615226<\/a>","time":1704763804,"resto":582941},{"no":618019,"now":"01\/09\/24(Tue)17:51:09","name":"Anonymous","com":"<a href=\"#p615258\" class=\"quotelink\">&gt;&gt;615258<\/a><br>This is not just a Montroll thread. It is a folding thread for all models from all creators.","time":1704840669,"resto":582941}]},{"posts":[{"no":614572,"now":"06\/27\/23(Tue)19:50:22","name":"Anonymous","sub":"Trade models","com":"I have Nahida, Fischl, a lot rares mikus, genshin and etc, I would like to trade for others models if you wanna trade send me a mesage https:\/\/paperzonevn.com\/members\/kyu<wbr>mikagura.32044\/","filename":"Nahida","ext":".png","w":666,"h":920,"tn_w":180,"tn_h":250,"tim":1687909822388124,"time":1687909822,"md5":"EEUwx3uqaiD6PkBc4qInIQ==","fsize":782788,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"trade-models","replies":7,"images":1,"omitted_posts":2,"omitted_images":0},{"no":616830,"now":"10\/25\/23(Wed)16:28:52","name":"Anonymous","com":"https:\/\/www.instagram.com\/reel\/CyWo<wbr>Wr9JS92\/?igshid=MzRlODBiNWFlZA==","time":1698265732,"resto":614572},{"no":616878,"now":"10\/31\/23(Tue)17:55:16","name":"Anonymous","com":"go up","time":1698789316,"resto":614572},{"no":617610,"now":"12\/08\/23(Fri)23:59:39","name":"Anonymous","com":"can you leave an email here so we can trade?","time":1702097979,"resto":614572},{"no":617628,"now":"12\/09\/23(Sat)17:35:34","name":"Anonymous","com":"<a href=\"#p614572\" class=\"quotelink\">&gt;&gt;614572<\/a><br>very nice","filename":"1702161341941_1","ext":".jpg","w":666,"h":920,"tn_w":90,"tn_h":125,"tim":1702161334455552,"time":1702161334,"md5":"kUYqLLQhFxhshQ+LlnEi5g==","fsize":133545,"resto":614572},{"no":618011,"now":"01\/08\/24(Mon)12:35:21","name":"Anonymous","com":"Can you please share Nahida with me?","time":1704735321,"resto":614572}]},{"posts":[{"no":616145,"now":"09\/19\/23(Tue)12:01:25","name":"Anonymous","sub":"Halloween cheapcel mask making","com":"I&#039;ll try my best to complete Shin&#039;s mask till Halloween using a retarded technique I developed as a kid","filename":"IMG_20230919_172831621","ext":".jpg","w":4208,"h":1894,"tn_w":250,"tn_h":112,"tim":1695139285143865,"time":1695139285,"md5":"cx9FQbB9eztYkLVlpoS6vw==","fsize":1106637,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"halloween-cheapcel-mask-making","replies":33,"images":15,"omitted_posts":28,"omitted_images":15},{"no":616963,"now":"11\/06\/23(Mon)20:03:10","name":"fagnut","com":"<a href=\"#p616408\" class=\"quotelink\">&gt;&gt;616408<\/a><br> Good job! it came out great, you have very nice muscles white boy... <br>sorry for the bump!","time":1699318990,"resto":616145},{"no":616966,"now":"11\/06\/23(Mon)23:51:18","name":"Anonymous","com":"<a href=\"#p616963\" class=\"quotelink\">&gt;&gt;616963<\/a><br>no ur fine, some shit head kept bumping it every few minutes to troll","time":1699332678,"resto":616145},{"no":617863,"now":"12\/26\/23(Tue)22:39:34","name":"Anonymous","com":"<a href=\"#p616150\" class=\"quotelink\">&gt;&gt;616150<\/a><br>that shit is fire, hot damn","time":1703648374,"resto":616145},{"no":617894,"now":"12\/29\/23(Fri)20:21:14","name":"Anonymous","com":"<a href=\"#p616145\" class=\"quotelink\">&gt;&gt;616145<\/a><br>I made a papercraft Guy Fawkes mask in college because people were wearing masks to a viewing of V for Vendetta and I got weird looks, unflattering questions, and nobody thought it was cool other than me. It didn&#039;t look as good as what you&#039;ve been posting, however.<br><br><a href=\"#p616409\" class=\"quotelink\">&gt;&gt;616409<\/a><br>4chan strips Exif data from images to stop retards from doxxing themselves. Exif data includes image orientation so you need to strip the data and manually rotate the image before posting.","time":1703899274,"resto":616145},{"no":618009,"now":"01\/08\/24(Mon)12:32:55","name":"Anonymous","com":"What a horrible mask, but it looks good too.","time":1704735175,"resto":616145}]},{"posts":[{"no":616594,"now":"10\/08\/23(Sun)10:09:39","name":"Anonymous","sub":"hi \/po\/","com":"<span class=\"quote\">&gt; I&#039;m new to papercraft and I&#039;m starting to use it as a relaxing hobby and as a cheap way to decorate my room <\/span><br>does anyone have any tips for starting out? I&#039;m new to this and I feel I&#039;m not very proficient and would like to get better","filename":"reipaint","ext":".jpg","w":402,"h":365,"tn_w":249,"tn_h":226,"tim":1696774179576618,"time":1696774179,"md5":"4YvcAAEF9h6KLX+SebciMw==","fsize":27131,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"hi-po","replies":13,"images":0,"omitted_posts":8,"omitted_images":0},{"no":616837,"now":"10\/26\/23(Thu)13:28:22","name":"Anonymous","com":"<a href=\"#p616828\" class=\"quotelink\">&gt;&gt;616828<\/a><br>Not OP but how about the type of paper used?","time":1698341302,"resto":616594},{"no":616838,"now":"10\/26\/23(Thu)16:17:39","name":"Piggy","com":"<a href=\"#p616837\" class=\"quotelink\">&gt;&gt;616837<\/a><br>I use 176g paper which is on the thicker side for most shit, but it&#039;s the easiest kind for me to get, a lot of people swear by like 120g paper tho","time":1698351459,"resto":616594},{"no":616858,"now":"10\/29\/23(Sun)16:53:25","name":"Anonymous","com":"<a href=\"#p616838\" class=\"quotelink\">&gt;&gt;616838<\/a><br>Yes","time":1698612805,"resto":616594},{"no":617989,"now":"01\/05\/24(Fri)18:09:22","name":"Anonymous","com":"<a href=\"#p616594\" class=\"quotelink\">&gt;&gt;616594<\/a><br>you could try making anime papercraft","time":1704496162,"resto":616594},{"no":618007,"now":"01\/08\/24(Mon)12:29:49","name":"Anonymous","com":"I use 120 paper, and I also added a glossy spray lacquer, you should try that.","time":1704734989,"resto":616594}]},{"posts":[{"no":611591,"now":"03\/05\/23(Sun)16:58:34","name":"Anonymous","com":"da mantis","filename":"AE00C19C-67E7-4F06-BAFD-CB1693FA8FD6","ext":".jpg","w":960,"h":1280,"tn_w":187,"tn_h":250,"tim":1678053514376680,"time":1678053514,"md5":"dV397NmLtDlloYh1O4cFaw==","fsize":99757,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"da-mantis","replies":6,"images":0,"omitted_posts":1,"omitted_images":0},{"no":614561,"now":"06\/27\/23(Tue)06:40:51","name":"Librarium","com":"Stunning! :D","time":1687862451,"resto":611591},{"no":616418,"now":"09\/29\/23(Fri)17:31:55","name":"Stan","com":"<a href=\"#p611591\" class=\"quotelink\">&gt;&gt;611591<\/a><br>Cool!","time":1696023115,"resto":611591},{"no":617563,"now":"12\/06\/23(Wed)14:13:46","name":"Anonymous","com":"<a href=\"#p611591\" class=\"quotelink\">&gt;&gt;611591<\/a><br>What kind of paper did you use to make it with?","time":1701890026,"resto":611591},{"no":617991,"now":"01\/06\/24(Sat)09:07:30","name":"Anonymous","com":"Cool and keep up the work","time":1704550050,"resto":611591},{"no":618006,"now":"01\/08\/24(Mon)12:28:11","name":"Anonymous","com":"<a href=\"#p611591\" class=\"quotelink\">&gt;&gt;611591<\/a><br>very pretty that mantis origami","time":1704734891,"resto":611591}]},{"posts":[{"no":608951,"now":"11\/19\/22(Sat)19:04:04","name":"POCHITA","sub":"Papercraft","com":"Hello 4chan, does anyone have this papercraft (Lala Satalin Deviluke) younligke ??? If you know more about it, please respond, the scan.","filename":"lala 1","ext":".png","w":383,"h":504,"tn_w":189,"tn_h":250,"tim":1668902644701071,"time":1668902644,"md5":"QjDwH5kpCbpKnOb53gc2Ig==","fsize":313480,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"papercraft","replies":16,"images":0,"omitted_posts":11,"omitted_images":0},{"no":611801,"now":"03\/18\/23(Sat)11:23:20","name":"Anonymous","com":"<a href=\"#p611795\" class=\"quotelink\">&gt;&gt;611795<\/a><br>https:\/\/mega.nz\/file\/MEpUUKYC#MFa4D<wbr>6jf6HB3a3L5BiZdKhsqonw0v1B4hueip7EN<wbr>h9o","time":1679153000,"resto":608951},{"no":611805,"now":"03\/18\/23(Sat)14:57:34","name":"Piggy","com":"<a href=\"#p611801\" class=\"quotelink\">&gt;&gt;611801<\/a><br>bless<br><br>I have a friend ableto buy from taobao but fuck it takes months","time":1679165854,"resto":608951},{"no":616430,"now":"09\/29\/23(Fri)17:49:34","name":"Anonymous","com":"<a href=\"#p608951\" class=\"quotelink\">&gt;&gt;608951<\/a><br>She cute","time":1696024174,"resto":608951},{"no":617988,"now":"01\/05\/24(Fri)18:05:02","name":"Anonymous","com":"<a href=\"#p608951\" class=\"quotelink\">&gt;&gt;608951<\/a><br>oh my word she is very attractive. I need to make me one.","time":1704495902,"resto":608951},{"no":618004,"now":"01\/08\/24(Mon)12:25:08","name":"Anonymous","com":"<span class=\"deadlink\">&gt;&gt;616442<\/span><br>how strange it is","time":1704734708,"resto":608951}]},{"posts":[{"no":617737,"now":"12\/19\/23(Tue)05:35:29","name":"Anonymous","sub":"Exchange","com":"Anyone here has this model and is willing to exchange?","filename":"IMG_20231219_203309","ext":".jpg","w":1080,"h":1059,"tn_w":250,"tn_h":245,"tim":1702982129328697,"time":1702982129,"md5":"bakqMeF37DvNgp9kKuFFLg==","fsize":364937,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"exchange","replies":6,"images":1,"omitted_posts":1,"omitted_images":1},{"no":617741,"now":"12\/19\/23(Tue)17:48:30","name":"Anonymous","com":"<a href=\"#p617740\" class=\"quotelink\">&gt;&gt;617740<\/a><br>onions 619509@gmail . com My email. I have a few models from zhaimanshe and Youlingke, send me an email for further details. ^_&lt;","time":1703026110,"resto":617737},{"no":617742,"now":"12\/19\/23(Tue)17:50:37","name":"Anonymous","com":"<a href=\"#p617740\" class=\"quotelink\">&gt;&gt;617740<\/a><br>wait, here is the correct email soy619509@gmail . com","time":1703026237,"resto":617737},{"no":617765,"now":"12\/20\/23(Wed)22:33:01","name":"Anonymous","com":"<a href=\"#p617740\" class=\"quotelink\">&gt;&gt;617740<\/a><br>Can you send me an email? My email is miiiiitpc@gmail.com","time":1703129581,"resto":617737},{"no":617986,"now":"01\/05\/24(Fri)16:13:12","name":"Anonymous","com":"I have many to change if you like send me a message to sakuyaac@gmail.com","time":1704489192,"resto":617737},{"no":618003,"now":"01\/08\/24(Mon)12:23:59","name":"Anonymous","com":"Could you share it with me? to email: leoskart437_32@gmail.com","time":1704734639,"resto":617737}]},{"posts":[{"no":547797,"now":"11\/25\/16(Fri)17:57:07","name":"Anonymous","com":"Ey \/po\/, one of the new Pokemon from Pokemon Sun and Moon version is Kartana. It looks like this. Can you make it in real life with origami, and if so, how?<br><br>-\/vp\/","filename":"798Kartana","ext":".png","w":535,"h":535,"tn_w":250,"tn_h":250,"tim":1480114627451,"time":1480114627,"md5":"dHKxPMeOov4E33foguLxXg==","fsize":158578,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"ey-po-one-of-the-new-pokemon-from-pokemon-sun-and","replies":156,"images":38,"omitted_posts":151,"omitted_images":35},{"no":614703,"now":"07\/05\/23(Wed)01:02:07","name":"Anonymous","filename":"1681339839694","ext":".jpg","w":600,"h":800,"tn_w":93,"tn_h":125,"tim":1688533327226402,"time":1688533327,"md5":"h1h0wu98rA5BcZzTgYan2Q==","fsize":71377,"resto":547797},{"no":614704,"now":"07\/05\/23(Wed)01:03:00","name":"Anonymous","filename":"1677158896560","ext":".jpg","w":1024,"h":768,"tn_w":125,"tn_h":93,"tim":1688533380675152,"time":1688533380,"md5":"OcFTU6XUSiHmwlFkc9WO9A==","fsize":54857,"resto":547797},{"no":615744,"now":"08\/23\/23(Wed)10:04:45","name":"Anonymous","com":"<a href=\"#p569830\" class=\"quotelink\">&gt;&gt;569830<\/a><br>Damn, I hope someone skilled creates a papercraft model that incorporates this, blends it with the nice folding of <a href=\"#p585171\" class=\"quotelink\">&gt;&gt;585171<\/a>, but uses the torso and leg proportions of <a href=\"#p548356\" class=\"quotelink\">&gt;&gt;548356<\/a> <a href=\"#p548439\" class=\"quotelink\">&gt;&gt;548439<\/a>, and uses high resolution textures. We can dream.","time":1692799485,"resto":547797},{"no":617085,"now":"11\/21\/23(Tue)21:38:59","name":"Anonymous","com":"This one is from minekouzan but i cant find a pattern out there","filename":"Cp5HC3HUEAE0o1f","ext":".jpg","w":680,"h":383,"tn_w":125,"tn_h":70,"tim":1700620739471233,"time":1700620739,"md5":"CpSLxuFl6IKEx8aLcJkYVQ==","fsize":17601,"resto":547797},{"no":617999,"now":"01\/07\/24(Sun)22:00:57","name":"Anonymous","com":"<a href=\"#p547797\" class=\"quotelink\">&gt;&gt;547797<\/a><br>Poor Kartana not even in current gen","time":1704682857,"resto":547797}]},{"posts":[{"no":599079,"now":"10\/14\/21(Thu)13:21:29","name":"Anonymous","sub":"Hololive papercraft","com":"Hololive papercraft thread.<br>There are lots of holo related papecrafts scattered across the web. Post them here.","filename":"firefox_3LOaNL0O0b","ext":".png","w":742,"h":1017,"tn_w":182,"tn_h":250,"tim":1634232089073,"time":1634232089,"md5":"kktY9du5j+9eRTqZzXI35g==","fsize":530141,"resto":0,"bumplimit":1,"imagelimit":0,"semantic_url":"hololive-papercraft","replies":315,"images":75,"omitted_posts":310,"omitted_images":74},{"no":618014,"now":"01\/08\/24(Mon)19:30:18","name":"Anonymous","com":"Por favor elimina eso por favor, culpa tu ya tengo muchos problema maldito hijo de puta","time":1704760218,"resto":599079},{"no":618018,"now":"01\/09\/24(Tue)02:24:08","name":"Anonymous","com":"<a href=\"#p618001\" class=\"quotelink\">&gt;&gt;618001<\/a><br>what is this? let me access this drive llink","time":1704785048,"resto":599079},{"no":618022,"now":"01\/09\/24(Tue)18:55:03","name":"Anonymous","com":"I want to get into origami like make anime 3d models but I am not sure where to start from can you guys help me out with some files for the start I am not sure but would love to make 3d anime waifu model","time":1704844503,"resto":599079},{"no":618023,"now":"01\/09\/24(Tue)18:56:50","name":"Anonymous","com":"i want to start making a collection of them","time":1704844610,"resto":599079},{"no":618086,"now":"01\/16\/24(Tue)07:01:43","name":"Biscuits","com":"<a href=\"#p617990\" class=\"quotelink\">&gt;&gt;617990<\/a><br>Looks like this anon, would love to get this without buying it but if I have to then i may have to","filename":"IMG_0996","ext":".jpg","w":780,"h":780,"tn_w":125,"tn_h":125,"tim":1705406503130148,"time":1705406503,"md5":"kLccDAvWjhclKgWWqDkmVg==","fsize":171640,"resto":599079}]},{"posts":[{"no":613703,"now":"06\/04\/23(Sun)04:56:19","name":"Anonymous","sub":"NOA","com":"I have these books from NOA for 1-100<br><br>3,5,17-19,22,47,49,51,53,58,61-63,6<wbr>6,68,70-72,80-so on<br><br>Looking to trade with anyone who has NOA 533 and up or ones that I am missing from 1-100","filename":"images.jpeg-38","ext":".jpg","w":400,"h":577,"tn_w":173,"tn_h":250,"tim":1685868979640901,"time":1685868979,"md5":"ZgSmHXxe19jDWIT6fu4hQw==","fsize":51859,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"noa","replies":183,"images":54,"omitted_posts":178,"omitted_images":53},{"no":617973,"now":"01\/03\/24(Wed)05:33:16","name":"Anonymous","com":"<a href=\"#p615718\" class=\"quotelink\">&gt;&gt;615718<\/a><br>That looks awfully incomplete. Is this his personal collection?","time":1704277996,"resto":613703},{"no":617976,"now":"01\/04\/24(Thu)06:19:21","name":"Anonymous","com":"<a href=\"#p613703\" class=\"quotelink\">&gt;&gt;613703<\/a><br>is this 11?","filename":"NOA 011","ext":".pdf","w":1,"h":1,"tn_w":87,"tn_h":125,"tim":1704367161782775,"time":1704367161,"md5":"jWzX54zxji8+WpSHUjN7jg==","fsize":6984199,"resto":613703},{"no":617977,"now":"01\/04\/24(Thu)06:40:57","name":"Anonymous","com":"<a href=\"#p617976\" class=\"quotelink\">&gt;&gt;617976<\/a><br>no apparently that&#039;s 62 nevermind I don&#039;t undersand numbers","time":1704368457,"resto":613703},{"no":617978,"now":"01\/04\/24(Thu)07:16:14","name":"Anonymous","com":"<a href=\"#p617976\" class=\"quotelink\">&gt;&gt;617976<\/a><br><a href=\"#p617977\" class=\"quotelink\">&gt;&gt;617977<\/a><br>Why do they prominently feature the month number in the title? Why is the actual volume number, 62 in this case, so small? <br>Are the Japanese retarded?","time":1704370574,"resto":613703},{"no":617979,"now":"01\/04\/24(Thu)11:31:22","name":"Anonymous","com":"<a href=\"#p617977\" class=\"quotelink\">&gt;&gt;617977<\/a><br>Until the no. 92, the numbers only indicated the release month. In that case, that 11 means november, but it is indeed the no. 62","time":1704385882,"resto":613703}]},{"posts":[{"no":612594,"now":"04\/30\/23(Sun)14:44:03","name":"Anonymous","com":"Looking for this papertoys from Pritt - Papergang","filename":"gang","ext":".jpg","w":3092,"h":1524,"tn_w":249,"tn_h":123,"tim":1682880243726217,"time":1682880243,"md5":"koMMoan4ud4v7GcDHVZlog==","fsize":1438173,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"looking-for-this-papertoys-from-pritt-papergang","replies":4,"images":0},{"no":615503,"now":"08\/08\/23(Tue)18:52:14","name":"Anonymous","com":"<span class=\"deadlink\">&gt;&gt;615494<\/span><br>Very inappropriate for this thread.","time":1691535134,"resto":612594},{"no":616421,"now":"09\/29\/23(Fri)17:38:01","name":"Anonymous","com":"I can\u2019t find any","time":1696023481,"resto":612594},{"no":617967,"now":"01\/02\/24(Tue)20:58:24","name":"Anonymous","com":"<a href=\"#p612594\" class=\"quotelink\">&gt;&gt;612594<\/a><br>that looks like something sold","time":1704247104,"resto":612594},{"no":617970,"now":"01\/03\/24(Wed)03:39:08","name":"Anonymous","com":"At least some of them (the original Paper Gang?) are still available just from an archived version of Pritt Germany&#039;s original Paper Gang campaign website: https:\/\/web.archive.org\/web\/2010040<wbr>4080659\/https:\/\/www.prittworld.com\/<wbr>de\/papergang\/die-gang\/bastel-sets.h<wbr>tml","time":1704271148,"resto":612594}]},{"posts":[{"no":616040,"now":"09\/08\/23(Fri)15:58:12","name":"Anonymous","com":"My son is 5 and is really into Army and Air Force stuff right now so I want to surprise him when he gets back from camp after the weekend. The problem is, I&#039;m a beginner and need more than a basic fighter jet or tank (which I&#039;ve already made for him before) to knock his socks off. Please post some guides on cool army, navy, and air force-related origami that I can make with common origami or a4 paper sheets.","filename":"fold-f15-jet-fighter-paper-plane.1280x600","ext":".jpg","w":1280,"h":600,"tn_w":250,"tn_h":117,"tim":1694203092007118,"time":1694203092,"md5":"jljVX8SVoHY29xcv88H6yQ==","fsize":100138,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"my-son-is-5-and-is-really-into-army-and-air-force","replies":9,"images":3,"omitted_posts":4,"omitted_images":2},{"no":616625,"now":"10\/10\/23(Tue)13:01:57","name":"Anonymous","com":"<a href=\"#p616083\" class=\"quotelink\">&gt;&gt;616083<\/a><br>nice boat","time":1696957317,"resto":616040},{"no":616642,"now":"10\/11\/23(Wed)13:55:32","name":"Anonymous","com":"<a href=\"\/po\/thread\/561868#p612745\" class=\"quotelink\">&gt;&gt;612745<\/a>","time":1697046932,"resto":616040},{"no":616753,"now":"10\/20\/23(Fri)10:22:10","name":"Anonymous","com":"Hey man, When i was 13 i found this cool website<br><br>https:\/\/paper-replika.com\/index.php<wbr>\/aircraft\/ac-130u-spooky-gunship-pa<wbr>per-model<br><br>i used to download all my papercraft models off of that site and it genuinely made my childhood worth living. Im sure i have made 60% of airplane models avelable on that site and i HIGHLY recommend you to use it as its free and trusted by me. If you dont like the look of C-130 you can also try other models on it<br><br>Also if you want a REALLY cool 3D F-22 that can fly (yes i said fly)<br>https:\/\/www.youtube.com\/watch?app=d<wbr>esktop&amp;v=lqBUnFOAW_w<br><br>check this one out i was able to make it easily when i was 13 with help of the tutorial and I can assure you this plane WILL FLY (the other models dont fly only this one does)","time":1697811730,"resto":616040},{"no":616763,"now":"10\/20\/23(Fri)23:23:19","name":"Anonymous","com":"<a href=\"#p616753\" class=\"quotelink\">&gt;&gt;616753<\/a>","filename":"flying-paper-f22-raptor-pdf","ext":".pdf","w":1,"h":1,"tn_w":88,"tn_h":125,"tim":1697858599023232,"time":1697858599,"md5":"Uuxm1TF+3U3ySdsSHkCN8g==","fsize":1882645,"resto":616040},{"no":616773,"now":"10\/21\/23(Sat)08:55:02","name":"Anonymous","com":"im the guy who posted on 10\/20\/23 replying to gy above who stole the pdf from video and posted it here ;-;","time":1697892902,"resto":616040}]},{"posts":[{"no":611872,"now":"03\/21\/23(Tue)17:28:46","name":"Anonymous","com":"hi, \/po\/ I&#039;m looking for weird little guys and\/or aliens like pic related, either origami or papercraft stuff is appreciated, thank you!","filename":"1679324129676367","ext":".pdf","w":1,"h":1,"tn_w":176,"tn_h":250,"tim":1679434126247906,"time":1679434126,"md5":"QZrKhTP1ktpv0HXd4j\/Nmw==","fsize":363496,"resto":0,"bumplimit":0,"imagelimit":0,"semantic_url":"hi-po-im-looking-for-weird-little-guys-andor","replies":3,"images":2},{"no":611876,"now":"03\/22\/23(Wed)09:44:20","name":"Anonymous","com":"<a href=\"#p611872\" class=\"quotelink\">&gt;&gt;611872<\/a>","filename":"robot_shun","ext":".pdf","w":1,"h":1,"tn_w":88,"tn_h":125,"tim":1679492660813030,"time":1679492660,"md5":"dFcZAcXf2Ez\/S9G5TtB1EA==","fsize":1620489,"resto":611872},{"no":611879,"now":"03\/22\/23(Wed)17:28:30","name":"Anonymous","com":"how&#039;s this","filename":"alien","ext":".pdf","w":1,"h":1,"tn_w":87,"tn_h":125,"tim":1679520510315923,"time":1679520510,"md5":"NAWbgpCEjTtNS7fogaZd2A==","fsize":442816,"resto":611872},{"no":616414,"now":"09\/29\/23(Fri)17:27:29","name":"Anonymous","com":"<a href=\"#p611879\" class=\"quotelink\">&gt;&gt;611879<\/a><br>Thanks","time":1696022849,"resto":611872}]}]}

export default {
    boards,
    threads
}