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
    id: 'cyberbullying-hybrid-stacking',
    title: 'Fine-Grained Cyberbullying Classification on Indonesian Social Media via Hybrid Stacking of IndoBERTweet and Subword Character Ensembles',
    authors: 'Muhammad Naza Firmansyah, et al.',
    targetJournal: 'Scopus Q2 / SINTA 1 (Journal of Computer Science & Information Technology)',
    abstract: 'Online toxic behavior on Indonesian social media poses significant psychological risks, yet most existing NLP models are restricted to binary schemes (bullying vs. non-bullying). In this study, we propose a fine-grained 7-class taxonomy comprising five toxic categories (Body Shaming, Intelligence Attack, Family Insult, Gender-Based Harassment, Base Hate) and two prosocial categories (Praise, Supportive). We collect and manually annotate an authentic dataset of 1,120 comments from Instagram and X. To overcome orthographic noise and negation loss, we construct a negation-aware preprocessing pipeline and a dual-granularity feature union. Our proposed Hybrid Stacking Ensemble combines contextual class probabilities from a 5-fold cross-validated fine-tuned IndoBERTweet transformer with linear SVM margins derived from sublinear TF-IDF character n-grams (3-5) and LDA topic distributions (K=7). On a hold-out test set, the hybrid architecture achieves an overall accuracy of 88.4% and a Macro-F1 score of 0.881, outperforming baseline IndoBERT (F1=0.812) and standalone SVM (F1=0.825). McNemar statistical testing demonstrates significant superiority (p = 0.004 < 0.05).',
    keywords: 'Cyberbullying Classification, Hybrid Stacking, IndoBERTweet, Subword Feature Engineering, NLP, Indonesian Social Media',
    introduction: `The proliferation of digital interactions on social media platforms such as Instagram and X (formerly Twitter) has led to an alarming rise in interpersonal hostility and cyberbullying in Indonesia (Kowalski et al., 2014; Firmansyah et al., 2025). Previous studies in Indonesian computational linguistics have largely treated toxicity as a binary classification problem (Saraswati et al., 2020). However, binary moderation is fundamentally inadequate for institutional interventions, where specific insults such as family defamation or gender-based harassment demand distinct legal and psychological counseling protocols.

Furthermore, Indonesian netizen vernacular presents unique computational challenges. First, informal abbreviations and extreme vowel omission (e.g., 'gblk' for goblok, 'tdk' for tidak) render standard dictionary tokenizers vulnerable to out-of-vocabulary (OOV) failure. Second, conventional stopword filtering algorithms indiscriminately strip negation tokens (e.g., 'tidak', 'bukan', 'jangan'), inadvertently converting sarcastic compliments or defensive remarks into toxic vectors. Third, the phenomenon of friendly teasing or mock-insult bantering requires deep semantic understanding of discourse context (Van Hee et al., 2018).

To bridge this research gap, this paper introduces an empirical study evaluating pre-trained Transformer embeddings coupled with fine-grained subword features. We hypothesize that a stacking ensemble leveraging probabilistic predictions from IndoBERTweet and margin confidence from Linear SVM will capture both global semantics and local typographical nuances.`,
    methods: `1. Dataset Collection & Ethical Protocol:
A total of 1,120 public comments were gathered using academic scraping APIs from trending Indonesian social media posts between 2024 and 2025. All usernames and identifiable handles were anonymized prior to annotation in compliance with ethical human data guidelines. Three independent linguists annotated each entry across 7 distinct classes, achieving an inter-annotator agreement of Fleiss Kappa = 0.84.

2. Negation-Aware Dual-Granularity Pipeline:
Text preprocessing incorporated Indonesian slang normalization and an explicit negation preservation rule. The feature extraction engine utilized a Scikit-Learn FeatureUnion comprising:
- Word n-grams (1-2) with sublinear term-frequency scaling.
- Subword character n-grams (3-5) generating over 16,000 dimensions to capture slang suffixes and root stems.
- Latent Dirichlet Allocation (LDA) topic modeling with K=7 components.

3. Hybrid Stacking Architecture:
The base layer consists of: (a) IndoBERTweet fine-tuned for 4 epochs using AdamW optimizer with initial learning rate 2e-5 and batch size 16, and (b) Linear Support Vector Classifier (C=1.0) equipped with calibrated sigmoid probability outputs. The meta-learner utilizes Logistic Regression (L2 penalty) trained on 5-fold out-of-fold cross-validation predictions to mitigate meta-overfitting.`,
    results: `Experimental evaluation was conducted on an independent 20% hold-out test set (N=224). The baseline Linear SVM achieved an accuracy of 82.5% (Macro-F1 = 0.821). Fine-tuned IndoBERT-base achieved 81.2% (Macro-F1 = 0.808), while IndoBERTweet alone reached 85.7% (Macro-F1 = 0.852).

The proposed Hybrid Stacking Ensemble demonstrated superior performance across all evaluation metrics, reaching an overall accuracy of 88.4%, precision of 88.9%, recall of 87.8%, and Macro-F1 of 0.881. In class-level breakdowns, Body Shaming yielded F1 = 0.91, Intelligence Attack yielded F1 = 0.89, and Base Hate reached F1 = 0.86. The confusion matrix revealed that the subword character features effectively rescued 14 out-of-vocabulary slang terms that were misclassified by standalone IndoBERTweet. Statistical significance was verified via McNemar's paired test, yielding chi-square = 8.16, p = 0.004, confirming that the improvement is statistically significant at alpha = 0.01.`,
    discussion: `The empirical findings affirm our primary hypothesis: combining deep contextualized representations with surface-level morphological character n-grams overcomes the severe orthographic entropy typical of Indonesian social media discourse. While Transformer architectures excel at capturing bidirectional attention, their byte-pair encodings occasionally fragment extreme slang roots into ambiguous sub-tokens (Koto et al., 2020). The Linear SVM meta-layer compensated for this specific blind spot.

Comparison with Related Works:
Our results surpass the 81.4% accuracy reported by Saraswati et al. (2020) on 3-class Indonesian toxicity and provide the first validated benchmark for 7-class fine-grained categorization. 

Limitations & Future Work:
Despite robust overall scores, classification performance was slightly lower on sarcastic compliments and multi-lingual colloquialisms (e.g., Javanese slang blended with Indonesian). Future research will explore multi-modal vision-language architectures and synthetic data augmentation using generative AI verified through VeriLab AI reproducibility protocols.`,
    references: `Firmansyah, M. N., et al. (2025). Multidisciplinary Collaboration and AI Evaluation in STEAM Research Platforms. Journal of Science & Technology Innovation, 4(2), 112-125.
Koto, F., Rahimi, A., Lau, J. H., & Baldwin, T. (2020). IndoLEM and IndoBERT: A Benchmark Dataset and Pre-trained Language Model for Indonesian NLP. In Proceedings of the 28th International Conference on Computational Linguistics (COLING 2020), pp. 757-770.
Kowalski, R. M., Giumetti, G. W., Schroeder, A. N., & Lattanner, M. R. (2014). Bullying in the digital age: A critical review and meta-analysis of cyberbullying research among youth. Psychological Bulletin, 140(4), 1073-1137.
Saraswati, D., et al. (2020). Automated Hate Speech Detection on Indonesian Twitter Using Support Vector Machines and Word2Vec. Indonesian Journal of Computing and Cybernetics Systems, 14(3), 245-256.
Van Hee, C., Jacobs, G., Emmery, C., Desmet, B., Lefever, E., Verhoeven, B., De Pauw, G., Daelemans, W., & Hoste, V. (2018). Automatic detection of cyberbullying in social media text. PloS ONE, 13(10), e0203794.`
  },
  {
    id: 'verilab-sensor-metrology',
    title: 'Verification of Sensor Calibration Linearity and Stochastic Tolerance Boundaries Using Gaussian Process Regression and Monte Carlo Sobol Analysis',
    authors: 'Muhammad Naza Firmansyah',
    targetJournal: 'SINTA 1 / IEEE Transactions on Instrumentation and Measurement',
    abstract: 'Reliable sensor metrology in high-precision Internet of Things (IoT) hardware requires rigorous validation against temperature drift, hysteresis, and stochastic noise. Conventional polynomial curve-fitting often yields overconfident confidence bounds near measurement extrema. In this research, we introduce a verification engine combining Gaussian Process Regression (GPR) with a 95% Bayesian credible interval and Saltelli-Jansen variance decomposition for global sensitivity analysis. Experimental sensor datasets (N=500) were evaluated across dual-temperature cycles. GPR demonstrated an RMSE of 0.042 V compared to 0.118 V in second-order polynomial fitting. Total Sobol sensitivity indices identified ambient temperature as the dominant drift contributor (ST = 0.68), guiding hardware thermal decoupling. The automated audit pipeline is containerized and released open-source within the VeriLab AI microservice.',
    keywords: 'Sensor Metrology, Gaussian Process Regression, Bayesian Confidence Bands, Monte Carlo Simulation, Sobol Sensitivity Analysis, Reproducibility',
    introduction: `Accurate calibration of physical sensors is fundamental to industrial automation, environmental monitoring, and scientific experimentation (Smith, 2021). Traditional calibration protocols rely on linear or polynomial regression, which assume homoscedastic Gaussian noise across the operating spectrum (Firmansyah, 2026). However, real-world transducers frequently display cross-axis temperature coupling and localized non-linearities.

This study implements an automated metrological audit framework utilizing nonparametric Bayesian regression and global sensitivity metrics. We test the framework on multidisiplinary STEAM research datasets to ensure experimental claims can be reproduced independently.`,
    methods: `The verification pipeline processes raw voltage-temperature time-series. Gaussian Process Regression was fitted using a Composite Matérn 5/2 plus White Noise kernel optimized via Maximum Marginal Likelihood (L-BFGS-B). Sensitivity decomposition used 10,000 Monte Carlo quasi-random Sobol sequences to evaluate First-Order (Si) and Total-Order (STi) indices.`,
    results: `Testing across 500 calibration points showed GPR achieving R2 = 0.998 and RMSE = 0.042 V. Residual normality was verified via Shapiro-Wilk test (W = 0.987, p = 0.42 > 0.05). Sobol variance decomposition yielded Si = 0.28 for primary input and ST = 0.68 for ambient temperature drift, indicating strong non-linear interaction.`,
    discussion: `The Bayesian credible interval provides physically grounded safety margins for sensor tolerances. Unlike static polynomial intervals, GPR uncertainty widens naturally in sparse sampling regions, preventing catastrophic overconfidence in sensor validation.`,
    references: `Firmansyah, M. N. (2026). VeriLab AI: Scientific Reproducibility & Sensor Metrology Verification Engine. Technical Whitepaper, SteamCraft Ecosystem.
Smith, J. (2021). Principles of Industrial Sensor Calibration and Uncertainty Budgets. Journal of Instrumentation Science, 45(1), 34-49.`
  }
];
