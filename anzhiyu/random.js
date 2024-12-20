var posts=["posts/91d3a27d/","posts/cc8476c6/","posts/30abfe58/","posts/ee80e2e7/","posts/4a17b156/","posts/5e38d91c/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"辣条","link":"https://blog.owwo.fun","descr":"悠远的天空，在苍穹的尽头","avatar":"https://blog.owwo.fun/img/avatar.jpg","tag":"博主","color":"vip"},{"name":"清羽飞扬","link":"https://blog.liushen.fun","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://blog.liushen.fun/info/siteshot.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"清羽飞扬","link":"https://blog.liushen.fun","avatar":"https://blog.liushen.fun/info/avatar.ico","siteshot":"https://blog.liushen.fun/info/siteshot.jpg","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜"},{"name":"东方月初","link":"https://blog.liuer.xin","avatar":"https://serv.200038.xyz/2024/09/19/040857.webp","siteshot":"https://serv.200038.xyz/2024/09/23/930491.webp","descr":"分享有趣但又无聊的东西。"},{"name":"Tianli","link":"https://blog.tianli0.top","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=507249007&spec=640","siteshot":null,"descr":"自知之明是最可贵的知识！"},{"name":"星雪","link":"https://snowtafir.top","avatar":"https://snowtafir.top/img/avatar.webp","siteshot":null,"descr":"银光渐深星无灭，古杉月空探花雪。浮尘荡风埃不落，杨柳春辰与露飞。"},{"name":"桜瀬トナエ","link":"https://wp.ousetonae.com","avatar":"https://static.minami.us.kg/static/img/2024/12/ousetonae-icon.webp","siteshot":null,"descr":"意志产生希望,希望孕育梦想,梦想改变世界"},{"name":"isYangs","link":"https://isyangs.cn","avatar":"https://7.isyangs.cn/8/655c9835780a0-8.jpg","siteshot":null,"descr":"一个前端Bug构造师的博客"},{"name":"下次放过我","link":"https://blog.wewoaini.us.kg","avatar":"https://11.we20040120.us.kg/api/rfile/images.jpg","siteshot":"https://11.we20040120.us.kg/api/rfile/image.png","descr":"霍霍的xp"},{"name":"Sky-cat✨","link":"https://blog.075262.xyz","avatar":"https://pic4.58cdn.com.cn/nowater/webim/big/n_v2706f69d74e3849528841b07982015d4c.jpg","siteshot":null,"descr":"星河满目，璀璨无限✨"},{"name":"乐活星球","link":"https://blog.lohas.fun","avatar":"https://img.lohas.fun/i/2024/12/13/675beeca350ea.png","descr":"分享健康与数字生活"},{"name":"Elykia","link":"https://blog.elykia.cn","avatar":"https://bu.dusays.com/2024/10/25/671b2438203a6.gif","descr":"致以无暇之人","siteshot":"https://bu.dusays.com/2024/10/25/671b50dc2dd2b.png"},{"name":"Twitter","link":"https://x.com","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"},{"name":"酷安","link":"https://www.coolapk.com","avatar":"https://www.coolapk.com/favicon.ico","descr":"发现科技新生活"},{"name":"哔哩哔哩","link":"https://www.bilibili.com","avatar":"https://www.bilibili.com/favicon.ico","descr":"( ゜- ゜)つロ 乾杯~"},{"name":"Instagram","link":"https://www.instagram.com","avatar":"https://img.z4a.net/images/2024/11/15/Instagram.png","descr":"Connect with friends and the world around you on Instagram"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };