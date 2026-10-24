export interface SamplePaper {
  id: string;
  title: string;
  authors: string;
  targetJournal: string;
  abstract: string;
  keywords: string;
  introduction: string;
  methods: string;
  results: string;
  discussion: string;
  references: string;
}

export const SAMPLE_PAPERS: SamplePaper[] = [
  {
    id: 'biopolymer-cassava-cellulose',
    title: 'Optimization of Tensile Strength and Biodegradability Kinetics in Cassava Starch Bioplastics Reinforced with Microcrystalline Cellulose',
    authors: 'Dr. Hendra Gunawan, Ir. Siti Rahmawati, et al. (Sample Demonstration)',
    targetJournal: 'International Journal of Biological Macromolecules / SINTA 1',
    abstract: 'Conventional synthetic polymers generated from petrochemical feedstock cause severe environmental degradation due to their recalcitrance to natural assimilation. In this experimental study, we formulate an eco-friendly thermoplastic biocomposite matrix utilizing cassava starch plasticized with analytical-grade glycerol (30 wt%) and reinforced with agricultural microcrystalline cellulose (MCC) at varying concentrations (0, 3, 6, and 9 wt%). Tensile mechanical testing was conducted in accordance with ASTM D638 standard protocols. Morphological characterization via scanning electron microscopy (SEM) revealed homogenous dispersion of cellulose microfibrils within the amylose-amylopectin continuous phase up to 6 wt% loading. One-way ANOVA revealed that reinforcing the starch matrix with 6 wt% MCC significantly enhanced ultimate tensile strength from 4.25 MPa to 14.82 MPa (F(3, 20) = 19.42, p = 0.002 < 0.01). Furthermore, soil burial biodegradation testing demonstrated a 78.4% mass loss within 28 days under controlled tropical soil conditions, confirming rapid natural assimilability. These findings validate the potential of agricultural cassava composites as sustainable single-use packaging alternatives.',
    keywords: 'Bioplastics, Cassava Starch, Microcrystalline Cellulose, Tensile Strength, Soil Burial Degradation, Sustainable Materials',
    introduction: `The escalating accumulation of non-biodegradable plastics in terrestrial and marine ecosystems represents one of the most critical anthropogenic environmental challenges of the twenty-first century (Geyer et al., 2017; Thompson et al., 2021). Single-use packaging accounts for more than 40% of global synthetic plastic production, the vast majority of which persists in landfills for centuries without meaningful chemical breakdown. Consequently, biopolymers derived from agro-industrial renewable resources such as starch, chitosan, and cellulose have emerged as leading candidates for circular bioeconomy applications (Avérous & Halley, 2009).

Cassava (Manihot esculenta) is widely cultivated across Southeast Asia and provides an abundant, cost-effective source of native starch comprising approximately 17% amylose and 83% amylopectin. However, native cassava starch films suffer from inherent mechanical limitations, notably low tensile strength, high hydrophilicity, and poor water vapor barrier properties (Al-Hassan & Norziah, 2012). To overcome these mechanical deficits, the incorporation of micro- and nano-scale reinforcement fillers has been widely proposed. Microcrystalline cellulose (MCC) derived from agricultural biomass possesses high aspect ratios, high crystallinity (>75%), and biocompatibility (Kumar et al., 2020).

Despite growing interest, prior investigations have rarely quantified the interactive trade-offs between filler agglomeration thresholds, tensile ductility, and soil assimilation kinetics in tropical environments. In this paper, we report a systematic evaluation of cassava-glycerol biocomposites reinforced with varying loadings of MCC. We hypothesize that interfacial hydrogen bonding between starch hydroxyl groups and cellulose fibrils will significantly augment tensile resistance without retarding ambient biodegradation kinetics.`,
    methods: `1. Materials Preparation & Biocomposite Synthesis:
Food-grade cassava starch was obtained from agricultural suppliers in East Java, Indonesia, with moisture content standardized at 11.2%. Analytical-grade glycerol (purity >= 99.5%) was utilized as the plasticizing agent. Microcrystalline cellulose (average particle size 20-50 um) was prepared from acid hydrolysis of purified agricultural bagasse. Biocomposite films were synthesized via aqueous solution casting: 10 g of starch was dispersed in 180 mL of deionized water, heated to 85 °C under continuous magnetic stirring at 500 rpm for 35 min to ensure complete starch gelatinization. Glycerol (3 g) and MCC suspensions (0, 3, 6, and 9 wt% relative to dry starch) were introduced and homogenized for an additional 15 min. The degassed mixture was cast onto Teflon-coated Petri dishes and cured at 45 °C in an air-circulating oven for 24 h.

2. Mechanical Tensile Testing:
Specimens were die-cut into dumbbell geometries according to ASTM D638 Type IV specifications and conditioned at 25 °C and 55% relative humidity for 48 h prior to testing. Uniaxial tensile measurements were performed on a Universal Testing Machine (Instron 5965) equipped with a 1 kN load cell at an extension rate of 5 mm/min. Five replicate samples were tested for each experimental formulation.

3. Soil Burial Biodegradation Kinetics:
Square film specimens (30 mm x 30 mm) were buried in natural compost soil at a depth of 5 cm within controlled incubation chambers maintained at 28 °C and 65% soil moisture content. Samples were retrieved at 7-day intervals over a 28-day period, gently brushed to remove adhering soil particles, dried in a vacuum desiccator to constant weight, and mass loss percentage was calculated gravimetrically.`,
    results: `Tensile testing demonstrated that the inclusion of microcrystalline cellulose substantially reinforced the mechanical integrity of the cassava biopolymer matrix. Pure unreinforced starch-glycerol films exhibited a baseline tensile strength of 4.25 +/- 0.41 MPa and an elongation at break of 48.2 +/- 3.5%. The addition of 3 wt% MCC increased tensile strength to 8.92 +/- 0.65 MPa. 

Optimal mechanical reinforcement was observed at 6 wt% MCC loading, where ultimate tensile strength peaked at 14.82 +/- 0.88 MPa, representing a 248% improvement over the unreinforced control. One-way analysis of variance (ANOVA) confirmed that the effect of MCC loading on tensile strength was statistically significant (F(3, 20) = 19.42, p = 0.002 < 0.01). Post-hoc Tukey HSD pairwise comparisons demonstrated significant differences between the 0 wt% and 6 wt% groups (p < 0.001). However, increasing filler loading to 9 wt% resulted in a decrease in tensile strength to 11.35 +/- 0.94 MPa, accompanied by a sharp decline in elongation at break to 12.1 +/- 1.8%, indicative of particle agglomeration and stress concentration points.

Soil burial experiments showed rapid assimilation for all formulations. At day 7, unreinforced films exhibited 34.2% mass loss, while 6 wt% MCC films showed 28.5% loss. By day 28, mass loss reached 91.5% for pure starch and 78.4% for the 6 wt% composite. Chi-square goodness-of-fit testing for structural disintegration rates yielded chi-square = 5.84, p = 0.023, verifying that cellulose reinforcement slightly moderates but does not impede the natural degradation pathway.`,
    discussion: `The empirical results strongly corroborate our initial hypothesis regarding interfacial reinforcement in carbohydrate biocomposites. The dramatic surge in tensile strength up to 6 wt% MCC loading is primarily attributed to extensive intermolecular hydrogen bonding between the abundant hydroxyl (-OH) groups of amylose/amylopectin chains and the crystalline surfaces of cellulose fibrils (Kumar et al., 2020). This network facilitates efficient stress transfer across the continuous phase under uniaxial tension.

The mechanical decline observed at 9 wt% loading reflects a well-documented percolation threshold phenomenon in particulate-filled polymers (Al-Hassan & Norziah, 2012). Beyond 6 wt%, excessive filler concentration induces localized micro-void formation and cellulose self-aggregation, creating premature crack propagation paths.

Comparison with Prior Literature:
The peak tensile strength of 14.82 MPa achieved in this study exceeds values previously reported by Avérous & Halley (2009) for plasticized potato starch (9.8 MPa) and aligns closely with commercial low-density polyethylene (LDPE) packaging benchmarks (10-15 MPa).

Limitations & Future Work:
While mechanical strength and biodegradability meet packaging benchmarks, high moisture sorption remains a limitation for perishable liquid containment. Future research should evaluate bio-based hydrophobic surface coatings, such as beeswax or poly(lactic acid) laminates, verified under standardized laboratory metrology protocols.`,
    references: `Al-Hassan, A. A., & Norziah, M. H. (2012). Starch–gelatin edible films: Water vapor permeability and mechanical properties as affected by plasticizers. Food Hydrocolloids, 26(1), 108-117.
Avérous, L., & Halley, P. J. (2009). Biocomposites based on plasticized starch. Biofuels, Bioproducts and Biorefining, 3(3), 329-343.
Geyer, R., Jambeck, J. R., & Law, K. L. (2017). Production, use, and fate of all plastics ever made. Science Advances, 3(7), e1700782.
Kumar, A., Sood, A., & Priyadarshi, R. (2020). Synthesis and characterization of cellulose microfibril reinforced biopolymer nanocomposites for packaging. Carbohydrate Polymers, 230, 115654.
Thompson, R. C., Swan, S. H., Moore, C. J., & vom Saal, F. S. (2021). Plastics, the environment and human health: Current consensus and future trends. Philosophical Transactions of the Royal Society B, 364(1526), 2153-2166.`
  },
  {
    id: 'microchannel-thermal-dynamics',
    title: 'Numerical Simulation and Empirical Validation of Heat Transfer Enhancement in Helical Microchannel Heat Exchangers',
    authors: 'Applied Thermodynamics Demonstration Group',
    targetJournal: 'International Journal of Heat and Mass Transfer / Scopus Q1',
    abstract: 'Miniaturized thermal management systems in high-density electronic and concentrated photovoltaic devices require ultra-compact heat exchangers capable of dissipating high heat fluxes exceeding 150 W/cm2 while minimizing pumping power penalties. In this investigation, we perform conjugated computational fluid dynamics (CFD) modeling and complementary bench-scale empirical validation on a copper helical microchannel heat sink with hydraulic diameter Dh = 500 um. Deionized water served as the working fluid across laminar Reynolds numbers spanning 200 to 1,600. Due to centrifugal Dean vortices induced within the curved channel architecture, the helical geometry generated significant boundary-layer interruption and cross-stream secondary flow circulation. Experimental measurements revealed that the helical microchannel achieved an average Nusselt number of Nu = 45.2 at Re = 1,400, representing a 38.6% enhancement in convective heat transfer relative to an equivalent straight microchannel baseline. One-way ANOVA confirmed statistical significance (F(2, 18) = 14.28, p = 0.008 < 0.01). The overall thermal resistance was reduced to 0.118 K/W with a modest friction factor increase of 16.4%, yielding a thermal performance evaluation criterion (PEC) of 1.28.',
    keywords: 'Microchannel Heat Sink, Dean Vortices, Nusselt Number, Laminar Heat Transfer, Computational Fluid Dynamics, Electronic Cooling',
    introduction: `The relentless miniaturization of high-performance microprocessors, power inverters, and concentrated photovoltaic receivers has resulted in localized thermal dissipation requirements that severely challenge conventional air-cooling systems (Tuckerman & Pease, 1981; Phillips, 1990). Operating junction temperatures exceeding 85 °C drastically degrade semiconductor lifespan and electrical efficiency. Microchannel heat exchangers utilizing single-phase liquid cooling offer exceptionally high surface-area-to-volume ratios and large convective heat transfer coefficients.

However, conventional straight microchannels suffer from thick hydrodynamic and thermal boundary layers under low Reynolds number laminar regimes, causing substantial temperature gradients along the flow path (Kandlikar & Grande, 2003). To disrupt laminar boundary-layer growth without transitioning into high-pressure turbulent regimes, passive heat transfer techniques such as wavy channels, secondary re-entrant cavities, and helical passages have been proposed (Steinke & Kandlikar, 2006).

Helical microchannel geometries induce an unbalanced centrifugal radial pressure gradient, generating counter-rotating secondary flow patterns known as Dean vortices (Dean, 1928). These vortices continuously transport cooler core fluid toward the heated outer wall, significantly enhancing temperature uniformity. This study presents a rigorous conjugated simulation and experimental verification of helical microchannels to characterize thermal resistance and hydraulic pressure drop across the entire laminar operating window.`,
    methods: `1. Experimental Flow Loop:
The testing apparatus consisted of a precision syringe pump (Harvard Apparatus) delivering degassed deionized water at controlled flow rates corresponding to Re = 200-1,600. The test module comprised an oxygen-free high-conductivity (OFHC) copper substrate featuring 10 parallel helical microchannels (Dh = 500 um, aspect ratio = 2.0, helix curvature ratio delta = 0.12) fabricated via micro-milling. A 10 mm x 10 mm ceramic thin-film heater provided uniform thermal heat flux up to 120 W/cm2. Temperature distributions were monitored using calibrated K-type micro-thermocouples embedded at 0.5 mm beneath the channel base. Differential pressure transducers recorded fluid pressure drops between inlet and outlet manifolds.

2. Computational Modeling:
Steady-state 3D conjugated heat transfer simulations were solved using ANSYS Fluent employing the finite volume method. The governing continuity, Navier-Stokes, and energy equations were discretized using a second-order upwind scheme with coupled pressure-velocity algorithms. Grid independence was confirmed across 4.2 million structured hexahedral elements with boundary-layer y+ < 1.0.`,
    results: `Conjugate CFD simulations and empirical data showed strong mutual agreement within +/- 4.8% root mean square error (RMSE). Baseline straight microchannels yielded an experimental Nusselt number increasing from Nu = 12.4 at Re = 200 to Nu = 32.6 at Re = 1,400. In contrast, the helical microchannel exhibited enhanced convective performance across all measured flow rates, achieving Nu = 21.8 at Re = 200 and reaching Nu = 45.2 at Re = 1,400.

One-way ANOVA demonstrated that the geometry effect on the Nusselt number was statistically significant (F(2, 18) = 14.28, p = 0.008 < 0.01). The local heat transfer coefficient reached h = 3,420 W/m2K at the outer wall. Maximum substrate temperature remained strictly below 62.4 °C under 100 W/cm2 heat input. Total pressure drop across the helical test section at Re = 1,400 was measured at 12.4 kPa compared to 10.6 kPa in the straight channel, corresponding to an acceptable friction factor increase of 16.4%. The performance evaluation criterion (PEC = (Nu/Nu_0) / (f/f_0)^(1/3)) remained consistently above unity (PEC = 1.28), demonstrating clear net thermodynamic advantage.`,
    discussion: `The experimental and numerical results substantiate that centrifugal secondary flow circulation in helical microchannels delivers substantial heat transfer augmentation in laminar regimes. Dean vortex pair generation continuously transports fluid from the channel core toward the heated periphery, renewing thermal boundary layers at the outer curvature (Steinke & Kandlikar, 2006).

Hydraulic Penalty Consideration:
Although secondary flow intensifies viscous dissipation and wall shear stress, the modest 16.4% pressure drop penalty is easily accommodated by miniature low-power centrifugal pumps. The thermal resistance of 0.118 K/W achieved in this design satisfies the cooling thresholds for next-generation gallium nitride (GaN) power transistors.

Comparison with Related Works:
The achieved PEC of 1.28 outperforms the 1.15 reported by Kandlikar & Grande (2003) for straight microchannels with pin-fin arrays and provides a clean, fouling-resistant architecture without flow stagnation zones.`,
    references: `Dean, W. R. (1928). The stream-line motion of fluid in a curved pipe. The London, Edinburgh, and Dublin Philosophical Magazine and Journal of Science, 5(30), 673-695.
Kandlikar, S. G., & Grande, W. J. (2003). Evolution of microchannel flow passages—thermohydraulic performance and fabrication technology. Heat Transfer Engineering, 24(1), 3-17.
Phillips, R. J. (1990). Microchannel heat sinks. In Advances in Thermal Modeling of Electronic Components and Systems, Vol. 2, ASME Press, New York, pp. 109-184.
Steinke, M. E., & Kandlikar, S. G. (2006). Single-phase liquid friction factor in microchannels. International Journal of Thermal Sciences, 45(11), 1073-1083.
Tuckerman, D. B., & Pease, R. F. W. (1981). High-performance heat sinking for VLSI. IEEE Electron Device Letters, 2(5), 126-129.`
  }
];
