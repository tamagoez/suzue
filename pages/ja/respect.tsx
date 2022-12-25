import { SiNiconico } from "react-icons/si";
import { FaYoutube, FaTwitter } from "react-icons/fa";

export default function JaRespect() {
  return (
    <>
      <style jsx>{`
        h2 {
          position: sticky;
          top: 25px;
          background-color: #ededed;
          margin-bottom: 0;
          height: 30px;
        }
      `}</style>
      <h1>Respect 尊敬</h1>
      順番は適当です。
      <ul>
        <li>
          <a href="#vocalo">VOCALOID(及び広義ボカロ)</a>
        </li>
        <li>
          <a href="#mmd">MMD</a>
        </li>
        <li>
          <a href="#illustrator">イラストレーター</a>
        </li>
        <li>
          <a href="#programmer">プログラマー</a>
        </li>
      </ul>
      <div>
        <h2 id="vocalo">VOCALOID(及び広義ボカロ)</h2>
        <hr />
        <div>
          <ResList
            name="Junky"
            youtube="@Junky_BOX"
            twitter="Junky_Box"
            niconico="11314366"
          >
            <p>
              尊敬という二文字では言い表せないくらい尊敬しています。
              <br />
              Happy
              Halloweenが特に大好きで、1日に5回以上聴く生活を1ヵ月以上繰り返していました。
              <br />
              また、これまでボカロ曲で泣いたことはなかったのですが、メランコリックで泣かされました。
              <br />
              色々な意味で土下座したいです。
            </p>
          </ResList>
          <ResList
            name="かいりきベア"
            youtube="@kairikibear"
            twitter="kairiki_bear"
            niconico="21990565"
          >
            <p>
              ボカロに沼らせてくれた第一人者です。
              <br />
              歌い手さんを通してルマ、ベノムを知りましたが、かいりきベアさんの色々な曲を聞き漁りました。
              <br />
              原点にして頂点。
              <br />
              かいりきベアさんのボカロ曲制作解説の動画を何度も見返していた記憶があります。
              <br />
              イナイイナイ依存症 が特に大好きです。
            </p>
          </ResList>
          <ResList
            name="LamazeP"
            youtube="@LamazeP"
            twitter="lamazeP"
            niconico="2523470"
          >
            <p>
              鏡音リンに沼らせてくれたボカロPさんです。
              <br />
              突然出てきた 難聴系男子が倒せない
              で可愛いイラストと共に流れてきた曲、今でもちょくちょく聴きに行きます。
              <br />
              Callなども好きです。
              <br />
              ボカロができて、さらに絵も描けるなんて憧れです...
            </p>
          </ResList>
          <ResList
            name="Daniwell"
            youtube="@daniwellaidn"
            twitter="daniwell_aidn"
            niconico="989911"
          >
            <p>
              ループ曲を作曲、そしてWebアプリ開発している、凄すぎて語彙力が失せます...
              <br />
              また、MVの可愛い絵も描いている、逆に何ができないのか気になります...
              <br />
              プログラミングをしながら、作曲して、絵も描ければ描けるようになって生きていきたいと思っていた私の心の支えになっています。
            </p>
          </ResList>
          <ResList
            name="Kikuo"
            youtube="@kikuo_sound"
            twitter="kikuo_sound"
            niconico="432349"
          >
            <p>
              次世代のボカロを知りました。
              <br />
              当時あまりダーク系統なボカロ曲を聞いたことがなかったのですが、ボカロ曲でもこれほど暗くすることができるのかととても感動しました。
              <br />
              ダークでも、耳に優しい、それがかえってダークにしている、流石です...
            </p>
          </ResList>
          <ResList
            name="MARETU"
            youtube="@MARETUch"
            twitter="maretu01"
            niconico="15918028"
          >
            <p>
              DTMが本当に素敵!!
              <br />
              幼女調声も素晴らしく、最初聞いたときに初音ミクとは思いませんでした。
              <br />
              ボカロ曲でもこんなジャンルができるんだ!ととても感動したことを今でも忘れません。
            </p>
          </ResList>
        </div>
      </div>
      <div>
        <h2 id="mmd">MMD</h2>
        <hr />
        <div>
          <ResList
            name="PizaCG"
            youtube="@PizaCG"
            twitter="Piza_ch"
            niconico="37960285"
          >
            <p>
              Pizaさんに出会う前から私はMMDを知っていたのですが、Pizaさんの動画を見て、MMDやりたい!!と思わされました。
              <br />
              エフェクトの使用がとても美しく、もう弟子にしてほしいくらいです...
            </p>
          </ResList>
        </div>
      </div>
      <div>
        <h2 id="illustrator">イラストレーター</h2>
        <hr />
        <div></div>
      </div>
      <div>
        <h2 id="programmer">プログラマー</h2>
        <hr />
        <div>
          <ResList name="napoan" twitter="napoan">
            <p>
              NapoanさんのマイクラのWikiから知りました。
              <br />
              Napoanさんのお陰でVercelやNext.jsを知れました。
              <br />
              Docusaurusで疑問に思ったことについてのツイートに、わざわざ改善点を返信してくださりとても感謝しています。
            </p>
          </ResList>
        </div>
      </div>
    </>
  );
}

function ResList({
  name,
  youtube,
  twitter,
  niconico,
  children,
}: {
  name: string;
  youtube?: string;
  twitter?: string;
  niconico?: string;
  children: any;
}) {
  return (
    <div>
      <style jsx>{`
        a {
          color: gray;
        }
        p {
          margin: 0;
        }
      `}</style>
      <div style={{ display: "flex", gap: "10px" , marginTop: "15px"}}>
        <div>
          <h3 style={{margin: 0}}>{name} さん</h3>
          </div>
      <div style={{ display: "inline-flex", gap: "10px" }}>
        {youtube ? (
          <div>
            <a
              href={`https://www.youtube.com/${youtube}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />({youtube})
            </a>
          </div>
        ) : null}
        {twitter ? (
          <div>
            <a
              href={`https://twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
              (@{twitter})
            </a>
          </div>
        ) : null}
        {niconico ? (
          <div>
            <a
              href={`https://www.nicovideo.jp/user/${niconico}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiNiconico />({niconico})
            </a>
          </div>
        ) : null}
        </div>
        </div>
      <p
        id={`${name}1`}
        onClick={() => {
          document.getElementById(name)!.style.display = "block";
          document.getElementById(`${name}1`)!.style.display = "none";
          document.getElementById(`${name}2`)!.style.display = "block";
        }}
        onSelect={() => false}
        style={{ cursor: "pointer", display: "block" }}
      >
        ▼ 展開
      </p>
      <p
        id={`${name}2`}
        onClick={() => {
          document.getElementById(name)!.style.display = "none";
          document.getElementById(`${name}1`)!.style.display = "block";
          document.getElementById(`${name}2`)!.style.display = "none";
        }}
        onSelect={() => false}
        style={{ cursor: "pointer", display: "none", margin: 0, padding: 0}}
      >
        ▲ 折り畳み
      </p>
      <div id={name} style={{ display: "none", margin: "0px", padding: 0}}>
        {children}
      </div>
    </div>
  );
}
