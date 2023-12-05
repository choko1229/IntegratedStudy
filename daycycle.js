document.addEventListener("DOMContentLoaded", function () {
    updateBackground(); // 読み込み時に背景を設定する
  
    // 10分ごとに背景を更新する
    setInterval(updateBackground, 600000);
  });
  
  function updateBackground() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.getDay(); // 日曜が0,月曜が1と連番を取得
  
    let backgroundImage;
  
    // 時間と曜日に基づいて背景を設定する
    if (currentDay >= 1 && currentDay <= 5) { // 月曜日から金曜日(平日)
      if (currentHour >= 7 && currentHour < 16) { // 昼の時間(7時~16時)
        backgroundImage = "url('./img/school/schoolday.webp')";
      } else if (currentHour >= 16 && currentHour < 19) { // 夕方の時間(16時~19時)
        backgroundImage = "url('./img/school/evening.webp')";
      } else { // 夜の時間(19時~7時)
        backgroundImage = "url('./img/school/night.webp')";
      }
    } else { // 土曜日と日曜日
      if (currentHour >= 7 && currentHour < 16) { // 昼の時間(7時~16時)
        backgroundImage = "url('./img/school/noon.webp')";
      } else if (currentHour >= 16 && currentHour < 19) { // 夕方の時間(16時~19時)
        backgroundImage = "url('./img/school/evening.webp')";
      } else { // 夜の時間(19時~7時)
        backgroundImage = "url('./img/school/night.webp')";
      }
    }
  
    // 背景画像を適用
    document.getElementById("backgroundContainer").style.backgroundImage = backgroundImage;
  }
  