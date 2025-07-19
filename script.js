function showLetter(type) {
  const messages ={
    down: "Isaiah 41:10- Fear not, for i am with you. I'm your God. I'll give you strength. I'll help you. I'll hold you steady, keep a firm grip on you. Sorrow and weeping are temporary, while God's favor and joy are lasting-Psalm 30:5 ",
    anxious: "Philippians 4:6-7 - Don't worry about anything; instead, pray about everything. Tell God what you need, and thank him for all he has done. Then you will experience God's peace, which exceeds anything we can understand. His peace will guard your heart and mind as you live in Christ Jesus",
    heavy: "Matthew 11:28 - Come to me, all you who are weary and burdened, and I will give you rest. Turn to God for relief and support. God is willing to hear you and help you ",
    anyone: "For I know the plans I have for you,' declares the Lord, 'plans to prosper you and not to harm you, plans to give you a hope and a future. — Jeremiah 29:11. God has good plans for you, even amidst difficult circumstances. ",
    matter: "Ephesians 2:10 - For you are God's masterpiece. He has created you anew in Christ Jesus, so you can do the good things he planned for you long ago. God created you, knows you intimately, and has a purpose for your life. Deuteronomy 7:6 - God has chosen you to be His treasured possession. ",
    unseen: "You are the one chosen by God, chosen for the high calling of priestly work, chosen to be a holy people, God's instrument to do his work and speak out for him, to tell others of the night-and-day difference he made for you—from nothing to something, from rejected to accepted- 1 Peter 2:9. He knows your thoughts, actions, and every detail of your life - Psalm 139",
    empty: "John 10:10 - Jesus came to offer fullness of life, not the emptiness that the world might offer.Romans 15:13 - May the God of great hope fill you up with joy, fill you up with peace, so that your believing lives, filled with the life-giving energy of the Holy Spirit, will brim over with hope!",
    behind: "Romans 8:28 - We know that in all things God works for the good of those who love him, who have been called according to his purpose. Psalm 138:8 - God will accomplish what concerns you. Keep in mind that God's timing is different from our own.",
   screwup: "1 John 1:9 - If we confess our sins, He is faithful and just to forgive us our sins and to cleanse us from all unrighteousness. So yes, we will fail. But through Jesus Christ, through placing our faith in Him and confessing our sins, we are cleansed, forgiven, and counted as righteous.",
   doing: "Turn to God in prayer, seek wisdom in His word, and trust in His guidance. James 1:5 - Ask God for wisdom, and he will give it to you "
    

  }

  const messageBox = document.getElementById("message-box");
  messageBox.innerText = messages[type];
  messageBox.style.display = "block";
}

const button = document.getElementById('heavyy')

themebutton.addEventListener("click", changetheme)
function changetheme(){
    document.body,classlist.toggle('darkmode')


}

window.addEventListener('keydown',function(e){
    console.log(e)
})


const hints = [
  "Not your mood right now? Scroll down ⬇️",
  "Keep exploring, the right message might be next 🎯",
  "Still not you? Let’s see what’s below 🔍",
  "The next letter might fit better 📨"
];

let index = 0;

setInterval(() => {
  index = (index + 1) % hints.length;
  document.getElementById("scroll-hint").textContent = hints[index];
}, 4000); // changes every 4 seconds
