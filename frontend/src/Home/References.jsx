import React from "react";
import Navbar from "../Components/Navbar";
import img from "../assets/image4.jpg";

const References = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "100vh", background: "white" }}>
        <div className="row g-0">
          <div className="col-sm-1">

          </div>
          <div className="col-sm-10">

          <h1 className="mt-3 mb-3">References</h1>

          </div>
        </div>
        
        <div className="card">
          <div
            className="row g-0 mt-3 mb-3"
            style={{ maxHeight: "200px", textAlign: "justify" }}
          >
            <div className="col-sm-1"></div>
            <div className="col-sm-10 p-0">
              <a
                href="https://www.sciencedirect.com/science/article/abs/pii/S1617138122001984"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card-body p-2">
                  <h5
                    className="card-title mb-1 "
                    style={{ textDecoration: "underline" }}
                  >
                    Environmental DNA (eDNA): Powerful technique for
                    biodiversity conservation
                  </h5>
                  <p className="card-text mb-1">
                    Environmental DNA (eDNA) refers to genetic material shed by
                    organisms into their environment, such as through skin
                    cells, hair, scales, or waste. By collecting and analyzing
                    eDNA from water, soil, or air samples, researchers can
                    detect and identify species present in an ecosystem without
                    the need for direct observation or capture. This
                    non-invasive method is particularly valuable for monitoring
                    rare, elusive, or endangered species, mapping biodiversity,
                    and detecting invasive species.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="row g-0 mt-3 mb-3"
            style={{ maxHeight: "200px", textAlign: "justify" }}
          >
            <div className="col-sm-1"></div>
            <div className="col-sm-10 p-0">
              <a
                href="https://www.researchgate.net/publication/384541403_Artificial_Intelligence-Assisted_Environmental_DNA_Metabarcoding_and_High-Resolution_Underwater_Optical_Imaging_for_Noninvasive_and_Innovative_Marine_Environmental_Monitoring"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card-body p-2">
                  <h5
                    className="card-title mb-1 "
                    style={{ textDecoration: "underline" }}
                  >
                    Artificial Intelligence-Assisted Environmental DNA
                    Metabarcoding and High-Resolution Underwater Optical Imaging
                    for Noninvasive and Innovative Marine Environmental
                    Monitoring
                  </h5>
                  <p className="card-text mb-1">
                    This approach integrates artificial intelligence (AI) with
                    eDNA metabarcoding and high-resolution underwater optical
                    imaging to enhance marine environmental monitoring. AI
                    algorithms assist in processing and interpreting complex
                    datasets from eDNA analyses and underwater imaging, enabling
                    more accurate and efficient identification of marine species
                    and habitats. This fusion of technologies supports
                    noninvasive, large-scale monitoring efforts, facilitating
                    better-informed conservation strategies.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="row g-0 mt-3 mb-3"
            style={{ maxHeight: "200px", textAlign: "justify" }}
          >
            <div className="col-sm-1"></div>
            <div className="col-sm-10 p-0">
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2589811622000106"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card-body p-2">
                  <h5
                    className="card-title mb-1 "
                    style={{ textDecoration: "underline" }}
                  >
                    Smart Oceans: Artificial intelligence and marine protected
                    area governance
                  </h5>
                  <p className="card-text mb-1">
                    "Smart Oceans" refers to the application of AI in the
                    governance and management of marine protected areas (MPAs).
                    AI tools analyze data from various sources, such as
                    satellite imagery and sensor networks, to monitor
                    environmental conditions, track biodiversity, and assess the
                    effectiveness of conservation measures. This dynamic
                    approach allows for adaptive management of MPAs, responding
                    to ecological changes and human activities in real-time.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="card">
          <div
            className="row g-0 mt-3 mb-3"
            style={{ maxHeight: "200px", textAlign: "justify" }}
          >
            <div className="col-sm-1"></div>
            <div className="col-sm-10 p-0">
              <a
                href="https://programs.wcs.org/press/News-Releases/articleType/ArticleView/articleId/22375/AI-Model-Finds-119-New-Ocean-Biodiversity-HotspotsAnd-Low-Overlap-With-Existing-Protected-Areas.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none text-dark"
              >
                <div className="card-body p-2">
                  <h5
                    className="card-title mb-1 "
                    style={{ textDecoration: "underline" }}
                  >
                    AI Model Identifies 119 New Ocean Biodiversity Hotspots with
                    Low Overlap to Existing Protected Areas
                  </h5>
                  <p className="card-text mb-1">
                    A recent study utilized an AI model to identify 119 new
                    ocean biodiversity hotspots across 11 countries in the
                    Western Indian Ocean. These newly discovered hotspots have
                    low overlap with existing marine protected areas, suggesting
                    that current conservation efforts may be missing critical
                    areas of biodiversity. This finding underscores the need for
                    reevaluating and expanding the boundaries of MPAs to include
                    these newly identified hotspots, thereby enhancing global
                    marine conservation efforts.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default References;
