import A from "@/renderer/components/A";
import Base from "../Base";
import "./index.scss";
import wcChannelImg from "@/assets/imgs/wechat_channel.jpg";

export default function Sparkles() {
  
  return (
    <Base withBlur defaultClose>
      <div className="modal--sparkles-container shadow backdrop-color">
        <Base.Header>✨✨✨开发者的话</Base.Header>
        <div className="modal--body-container">
          <p>
            这款软件的初衷首先是满足自己日常的需求，顺便分享出来，如果能对更多人有帮助那再好不过。
          </p>
          <div className="img-container">
            <img src={wcChannelImg} className="wechat-channel"></img>
          </div>
          <p>
            本软件完全免费，并基于GPL协议开源，仅供学习参考使用.
          </p>
          <p>
            本软件仅仅是一个本地播放器，也可以通过插件扩展第三方源，插件可以完成包括播放、搜索在内的大部分功能；如果你是从第三方下载的插件，请一定谨慎识别这些插件的安全性，保护好自己。（注意：插件以及插件可能产生的数据与本软件无关，请使用者合理合法使用。）
          </p>
          <p>
            还请注意本软件只是个人的业余项目，距离正式版也有很长一段距离。如果你在找成熟稳定的音乐软件，可以考虑其他优秀的软件。当然我会一直维护，让它变得尽可能的完善一些。业余时间用爱发电，进度慢还请见谅。如果你想帮忙提交代码或者开发一些功能，欢迎联系我（公众号留言/发邮件都行）。
          </p>
          <p>
            最后，如果真的有人看到这里，希望这款软件可以帮到你，这也是这款软件存在的意义。
          </p>
        </div>
      </div>
    </Base>
  );
}
