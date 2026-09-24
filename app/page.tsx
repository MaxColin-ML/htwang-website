const profileUrl =
  'https://www.ieecas.cn/sourcedb/zw/team/202602/t20260212_8143773.html';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const publications = [
  {
    year: '2025',
    venue: 'IEEE TGRS',
    title:
      'A Label-Free High-Precision Residual Moveout Picking Method for Depth-Domain Tomography Based on Deep Learning',
    authors:
      'Hongtao Wang, Jiandong Liang, Lei Wang, Shuaizhe Liang, Jinping Zhu, Chunxia Zhang*, and Jiangshe Zhang',
    citation:
      'IEEE Transactions on Geoscience and Remote Sensing, 63, 5922515.',
    links: [
      ['DOI', 'https://doi.org/10.1109/TGRS.2025.3612370'],
      ['arXiv', 'https://arxiv.org/abs/2503.06038'],
    ],
  },
  {
    year: '2024',
    venue: 'IEEE TGRS',
    title:
      'UPNet: Uncertainty-Based Picking Deep Learning Network for Robust First Break Picking',
    authors:
      'Hongtao Wang, Jiangshe Zhang*, Xiaoli Wei, Li Long, Chunxia Zhang, and Zhenbo Guo',
    citation:
      'IEEE Transactions on Geoscience and Remote Sensing, 62, 5924214.',
    links: [
      ['DOI', 'https://doi.org/10.1109/TGRS.2024.3439685'],
      ['arXiv', 'https://arxiv.org/abs/2305.13799'],
    ],
  },
  {
    year: '2024',
    venue: 'IEEE TGRS',
    title: 'DSU-Net: Dynamic Snake U-Net for 2-D Seismic First Break Picking',
    authors:
      'Hongtao Wang, Rongyu Feng, Liangyi Wu, Mutian Liu, Yinuo Cui, Chunxia Zhang*, and Zhenbo Guo',
    citation:
      'IEEE Transactions on Geoscience and Remote Sensing, 62, 5926613.',
    links: [
      ['DOI', 'https://doi.org/10.1109/TGRS.2024.3457521'],
      ['arXiv', 'https://arxiv.org/abs/2405.16980'],
    ],
  },
  {
    year: '2024',
    venue: 'GEOPHYSICS',
    title:
      'MSSPN: Automatic First-Arrival Picking Using a Multistage Segmentation Picking Network',
    authors:
      'Hongtao Wang, Jiangshe Zhang*, Xiaoli Wei, Chunxia Zhang, Li Long, and Zhenbo Guo',
    citation: 'GEOPHYSICS, 89(3), U53–U70.',
    links: [
      ['DOI', 'https://doi.org/10.1190/geo2023-0110.1'],
      ['arXiv', 'https://arxiv.org/abs/2209.03132'],
    ],
  },
  {
    year: '2022',
    venue: 'IEEE TGRS',
    title:
      'Automatic Velocity Picking Using a Multi-Information Fusion Deep Semantic Segmentation Network',
    authors:
      'Hongtao Wang, Jiangshe Zhang*, Zixiang Zhao, Chunxia Zhang, Li Long, Zhiyu Yang, and Weifeng Geng',
    citation:
      'IEEE Transactions on Geoscience and Remote Sensing, 60, 5918310.',
    links: [
      ['DOI', 'https://doi.org/10.1109/TGRS.2022.3188669'],
      ['arXiv', 'https://arxiv.org/abs/2205.03645'],
      ['Code', 'https://github.com/newbee-ML/MIFN-Velocity-Picking'],
    ],
  },
  {
    year: '2024',
    venue: 'CGU · Oral',
    title:
      'Seismic First Break Picking in a Higher Dimension Using Deep Graph Learning',
    authors:
      'Hongtao Wang, Li Long, Jiangshe Zhang, Xiaoli Wei, Chunxia Zhang, and Zhenbo Guo',
    citation: 'Chinese Geoscience Union Annual Meeting, Oral Presentation.',
    links: [['arXiv', 'https://arxiv.org/abs/2404.08408']],
  },
] as const;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳至主要内容
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href="#top" aria-label="返回首页顶部">
            <span>WH</span>
            <strong>汪泓涛</strong>
          </a>
          <nav aria-label="主页导航">
            <a href="#biography">简介</a>
            <a href="#research">研究</a>
            <a href="#news">动态</a>
            <a href="#publications">论著</a>
          </nav>
          <a className="header-contact" href="mailto:wanghongtao@ieecas.cn">
            联系我 <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      <main id="main-content">
        <section className="hero shell" id="top">
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img
                src={`${basePath}/profile.jpg`}
                alt="汪泓涛，中国科学院地球环境研究所副研究员"
                width="520"
                height="680"
              />
            </div>
            <p>
              <span aria-hidden="true" /> AI × EARTH SCIENCE
            </p>
          </div>

          <div className="hero-copy">
            <p className="eyebrow">Associate Professor · Postdoctoral Researcher</p>
            <h1>
              汪泓涛
              <span>Hongtao Wang</span>
            </h1>
            <p className="hero-role">副研究员 · 地质学博士后</p>
            <p className="hero-affiliation">
              <a href="https://ieexa.cas.cn/" target="_blank" rel="noreferrer">
                中国科学院地球环境研究所
              </a>
              <br />
              Institute of Earth Environment, CAS
              <br />
              Xi&apos;an, China
            </p>

            <div className="hero-links" aria-label="学术与联系链接">
              <a href="mailto:wanghongtao@ieecas.cn">Email</a>
              <a href="https://orcid.org/0000-0003-0657-4972" target="_blank" rel="noreferrer">
                ORCID
              </a>
              <a href={profileUrl} target="_blank" rel="noreferrer">
                CAS Profile
              </a>
            </div>
          </div>
        </section>

        <div className="shell content-shell">
          <section className="section biography" id="biography">
            <div className="section-heading">
              <p>01 / BIOGRAPHY</p>
              <h2>个人简介</h2>
            </div>
            <div className="biography-grid">
              <p className="lead">
                我是中国科学院地球环境研究所副研究员、地质学博士后，研究聚焦于
                <strong>人工智能与地球科学的交叉融合</strong>，探索数据驱动模型与物理机制如何共同服务于地球环境与灾害预测。
              </p>
              <div className="timeline" aria-label="教育与工作经历">
                <div>
                  <time>2025 — 至今</time>
                  <p>中国科学院地球环境研究所</p>
                  <span>副研究员 · 地质学博士后 · 青年人才计划</span>
                </div>
                <div>
                  <time>2020 — 2025</time>
                  <p>西安交通大学</p>
                  <span>统计学博士</span>
                </div>
                <div>
                  <time>2020</time>
                  <p>华中师范大学</p>
                  <span>统计学学士</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section research" id="research">
            <div className="section-heading light">
              <p>02 / RESEARCH</p>
              <h2>研究方向</h2>
            </div>
            <p className="research-statement">
              通过数学手段表征非结构化地学数据，以半模型、半数据驱动的方法，揭示现实复杂场景下地质灾害的孕灾机制。
            </p>
            <ol className="research-list">
              <li>
                <span>01</span>
                <h3>多模态地学数据耦合</h3>
                <p>融合多源、多模态与多时空尺度信息，建立统一的数据表达与推理框架。</p>
              </li>
              <li>
                <span>02</span>
                <h3>致灾先验因子表示学习</h3>
                <p>面向非结构化地学信息，学习具有物理意义和泛化能力的先验特征。</p>
              </li>
              <li>
                <span>03</span>
                <h3>可解释地质灾害预测</h3>
                <p>在现实复杂场景中识别潜在隐患点，并解释模型判断与孕灾机制之间的联系。</p>
              </li>
            </ol>
          </section>

          <section className="section news" id="news">
            <div className="section-heading">
              <p>03 / NEWS</p>
              <h2>近期动态</h2>
            </div>
            <div className="news-list">
              <article>
                <time>04 / 2026</time>
                <p>作为邀请人参与“古今风云·青年论坛”AI for Geoscience 专场，推动人工智能与地球系统科学的交叉交流。</p>
              </article>
              <article>
                <time>2025</time>
                <p>入选中国科学院地球环境研究所青年人才计划，并主持陕西省博士后资助项目。</p>
              </article>
              <article>
                <time>2025</time>
                <p>残差时差自动拾取研究发表于 IEEE Transactions on Geoscience and Remote Sensing。</p>
              </article>
              <article>
                <time>2024</time>
                <p>UPNet、DSU-Net 与 MSSPN 等地震信号智能拾取成果相继发表。</p>
              </article>
            </div>
          </section>

          <section className="section publications" id="publications">
            <div className="section-heading publication-heading">
              <div>
                <p>04 / SELECTED WORK</p>
                <h2>代表论著</h2>
              </div>
              <span>Selected publications &amp; preprints</span>
            </div>

            <div className="publication-list">
              {publications.map((publication) => (
                <article className="publication" key={publication.title}>
                  <div className="publication-meta">
                    <time>{publication.year}</time>
                    <span>{publication.venue}</span>
                  </div>
                  <div className="publication-body">
                    <h3>{publication.title}</h3>
                    <p className="authors">{publication.authors}</p>
                    <p className="citation">{publication.citation}</p>
                    <div className="paper-links" aria-label={`${publication.title} 相关链接`}>
                      {publication.links.map(([label, href]) => (
                        <a key={label} href={href} target="_blank" rel="noreferrer">
                          {label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="contact" id="contact">
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>期待与不同领域的研究者<br />碰撞新的地学问题。</h2>
            <div className="contact-links">
              <a href="mailto:wanghongtao@ieecas.cn">wanghongtao@ieecas.cn</a>
              <a href="mailto:colin315wht@gmail.com">colin315wht@gmail.com</a>
            </div>
          </section>
        </div>
      </main>

      <footer>
        <div className="shell footer-inner">
          <p>© 2026 Hongtao Wang</p>
          <p>AI · Statistics · Earth Science</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
