import React, { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';
import { ChevronDown, ChevronUp, Compass } from 'lucide-react';
import './ackermann.css'; // We'll create this file next

// Custom wrapper for InlineMath to add our class
const StyledInlineMath = (props) => {
  return (
    <span className="katex-inline">
      <InlineMath {...props} />
    </span>
  );
};

// Ackermann Steering Diagram Component
const AckermannDiagram = () => {
  return (
    <div className="w-full flex flex-col items-center my-6">
      <svg className="w-full max-w-2xl bg-white p-4 rounded-lg border border-voltaris-neutral-200 ackermann-svg" viewBox="0 0 700 450">
        {/* Main rectangle/chassis */}
        <rect x="150" y="150" width="400" height="150" fill="none" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
        
        {/* Dimension B (height) */}
        <g className="dimensions">
          <line x1="620" y1="150" x2="620" y2="300" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
          <line x1="610" y1="150" x2="630" y2="150" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
          <line x1="610" y1="300" x2="630" y2="300" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
        </g>
        <path d="M620,160 L625,170 L620,180 L615,170 Z" fill="rgba(58, 110, 143, 0.8)"/>
        <path d="M620,290 L625,280 L620,270 L615,280 Z" fill="rgba(58, 110, 143, 0.8)"/>
        <text x="645" y="225" fontFamily="serif" fontStyle="italic" fontSize="24" textAnchor="middle" fill="rgba(58, 110, 143, 0.8)">B</text>
        
        {/* Dimension l (length) */}
        <g className="dimensions">
          <line x1="150" y1="350" x2="550" y2="350" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
          <line x1="150" y1="340" x2="150" y2="360" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
          <line x1="550" y1="340" x2="550" y2="360" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
        </g>
        <path d="M160,350 L170,355 L180,350 L170,345 Z" fill="rgba(58, 110, 143, 0.8)"/>
        <path d="M540,350 L530,355 L520,350 L530,345 Z" fill="rgba(58, 110, 143, 0.8)"/>
        <text x="350" y="380" fontFamily="serif" fontStyle="italic" fontSize="24" textAnchor="middle" fill="rgba(58, 110, 143, 0.8)">l</text>
        
        {/* Blue rectangles at corners (wheel assemblies) */}
        {/* Rear Left */}
        <rect x="150" y="130" width="80" height="40" fill="none" stroke="rgba(58, 110, 143, 0.8)" strokeWidth="2"/>
        {/* Rear Right */}
        <rect x="150" y="280" width="80" height="40" fill="none" stroke="rgba(58, 110, 143, 0.8)" strokeWidth="2"/>
        {/* Front Left */}
        <rect x="470" y="120" width="80" height="40" fill="none" stroke="rgba(58, 110, 143, 0.8)" strokeWidth="2" transform="rotate(-15,510,140)"/>
        {/* Front Right */}
        <rect x="470" y="270" width="80" height="40" fill="none" stroke="rgba(58, 110, 143, 0.8)" strokeWidth="2" transform="rotate(15,510,290)"/>
        
        {/* Corner labels */}
        <text x="120" y="140" fontFamily="sans-serif" fontSize="20" fill="rgba(212, 83, 102, 0.85)" textAnchor="end">RL</text>
        <text x="120" y="320" fontFamily="sans-serif" fontSize="20" fill="rgba(212, 83, 102, 0.85)" textAnchor="end">RR</text>
        <text x="580" y="130" fontFamily="sans-serif" fontSize="20" fill="rgba(212, 83, 102, 0.85)">FL</text>
        <text x="580" y="320" fontFamily="sans-serif" fontSize="20" fill="rgba(212, 83, 102, 0.85)">FR</text>
        
        {/* Green rotation arrows - Direct animation applied here for better browser support */}
        <g>
          {/* Rear Left */}
          <g style={{ animation: "wheel-rotate 15s linear infinite", transformOrigin: "190px 150px" }}>
            <path d="M190,150 A15,15 0 1,1 205,135" fill="none" stroke="rgba(45, 163, 98, 0.85)" strokeWidth="2"/>
            <polygon points="208,135 203,142 200,132" fill="rgba(45, 163, 98, 0.85)"/>
          </g>
          
          {/* Rear Right */}
          <g style={{ animation: "wheel-rotate 15s linear infinite", transformOrigin: "190px 320px" }}>
            <path d="M190,320 A15,15 0 1,0 205,335" fill="none" stroke="rgba(45, 163, 98, 0.85)" strokeWidth="2"/>
            <polygon points="208,335 203,328 200,338" fill="rgba(45, 163, 98, 0.85)"/>
          </g>
          
          {/* Front Left */}
          <g style={{ animation: "wheel-rotate 15s linear infinite", transformOrigin: "500px 140px" }}>
            <path d="M500,140 A15,15 0 1,1 515,125" fill="none" stroke="rgba(45, 163, 98, 0.85)" strokeWidth="2"/>
            <polygon points="518,125 513,132 510,122" fill="rgba(45, 163, 98, 0.85)"/>
          </g>
          
          {/* Front Right */}
          <g style={{ animation: "wheel-rotate 15s linear infinite", transformOrigin: "500px 310px" }}>
            <path d="M500,310 A15,15 0 1,0 515,325" fill="none" stroke="rgba(45, 163, 98, 0.85)" strokeWidth="2"/>
            <polygon points="518,325 513,318 510,328" fill="rgba(45, 163, 98, 0.85)"/>
          </g>
        </g>
        
        {/* Diagonal measurement lines */}
        <g className="dimensions">
          <line x1="190" y1="150" x2="510" y2="300" stroke="rgba(58, 110, 143, 0.4)" strokeWidth="1.5" strokeDasharray="5,5"/>
          <line x1="190" y1="300" x2="510" y2="150" stroke="rgba(58, 110, 143, 0.4)" strokeWidth="1.5" strokeDasharray="5,5"/>
          <line x1="510" y1="150" x2="510" y2="300" stroke="rgba(58, 110, 143, 0.4)" strokeWidth="1" strokeDasharray="5,5"/>
        </g>
        <text x="300" y="205" fontFamily="serif" fontStyle="italic" fontSize="18" textAnchor="middle" fill="rgba(58, 110, 143, 0.7)">L_RL</text>
        <text x="300" y="260" fontFamily="serif" fontStyle="italic" fontSize="18" textAnchor="middle" fill="rgba(58, 110, 143, 0.7)">L_RR</text>
        <text x="522" y="225" fontFamily="serif" fontStyle="italic" fontSize="18" textAnchor="start" fill="rgba(58, 110, 143, 0.7)">L_FR</text>
        
        {/* Top dimension A */}
        <g className="dimensions">
          <line x1="150" y1="90" x2="550" y2="90" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="2"/>
          <line x1="150" y1="80" x2="150" y2="100" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="1"/>
          <line x1="550" y1="80" x2="550" y2="100" stroke="rgba(58, 110, 143, 0.65)" strokeWidth="1"/>
        </g>
        <text x="350" y="75" fontFamily="serif" fontStyle="italic" fontSize="24" textAnchor="middle" fill="rgba(58, 110, 143, 0.8)">A</text>
        
        {/* Red directional indicators */}
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L9,3 z" fill="rgba(212, 83, 102, 0.85)"/>
          </marker>
        </defs>
        
        <g className="direction-arrows">
          <path d="M500,225 C505,215 510,205 500,195" fill="none" stroke="rgba(212, 83, 102, 0.85)" strokeWidth="2" markerEnd="url(#arrow)"/>
          <path d="M500,225 C505,235 510,245 500,255" fill="none" stroke="rgba(212, 83, 102, 0.85)" strokeWidth="2" markerEnd="url(#arrow)"/>
        </g>
        
        {/* Red i_o and j_o labels */}
        <text x="480" y="195" fontFamily="serif" fontStyle="italic" fontSize="18" fill="rgba(212, 83, 102, 0.85)" textAnchor="end">i_o</text>
        <text x="480" y="255" fontFamily="serif" fontStyle="italic" fontSize="18" fill="rgba(212, 83, 102, 0.85)" textAnchor="end">j_o</text>
        
        {/* Instantaneous Center of Rotation (ICR) */}
        <g>
          <line x1="350" y1="225" x2="40" y2="225" stroke="rgba(212, 83, 102, 0.35)" strokeWidth="1.5" strokeDasharray="8,4"/>
          <text x="70" y="215" fontFamily="serif" fontStyle="italic" fontSize="18" fill="rgba(212, 83, 102, 0.85)" textAnchor="middle">ICR</text>
        </g>
        
        {/* Hole indicators at wheel contact points */}
        <g className="hole-indicator">
          <circle cx="190" cy="150" r="4" fill="rgba(212, 83, 102, 0.85)" fillOpacity="0.6"/>
          <circle cx="190" cy="300" r="4" fill="rgba(212, 83, 102, 0.85)" fillOpacity="0.6"/>
          <circle cx="500" cy="140" r="4" fill="rgba(212, 83, 102, 0.85)" fillOpacity="0.6"/>
          <circle cx="500" cy="310" r="4" fill="rgba(212, 83, 102, 0.85)" fillOpacity="0.6"/>
        </g>
        
        {/* Title */}
        <text x="350" y="40" fontFamily="sans-serif" fontSize="20" textAnchor="middle" fill="#475569" fontWeight="bold">Ackermann Direksiyon Geometrisi</text>
      </svg>
      <div className="text-sm text-center mt-3 max-w-lg bg-white p-3 rounded-lg border border-voltaris-neutral-200 backdrop-blur-sm">
        <div className="flex items-center justify-center mb-1">
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-voltaris-red to-transparent opacity-70"></div>
          <span className="px-2 text-voltaris-red text-xs uppercase tracking-wider font-semibold">Şekil Açıklaması</span>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-voltaris-red to-transparent opacity-70"></div>
        </div>
        <p className="text-voltaris-neutral-700"><span className="text-voltaris-red">Ackermann direksiyon modelinde</span>, viraj alırken iç ve dış ön tekerlekler farklı açılarda döner. Buradaki <span className="text-voltaris-blue">A</span> ve <span className="text-voltaris-blue">B</span> boyutları ile <span className="text-voltaris-blue">l</span> (dingil mesafesi) geometrik hesaplamaların temelidir.</p>
        <p className="text-voltaris-neutral-600 text-xs mt-1 italic">Tekerleklerin dönüş merkezleri, iç tekerleğin daha keskin dönmesini sağlayarak kayma olmadan manevra imkanı tanır.</p>
      </div>
    </div>
  );
};

const AckermannPrinciple = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white backdrop-blur-md rounded-lg border border-voltaris-neutral-200 overflow-hidden mb-8 shadow-lg transition-all duration-500">
      {/* Header - always visible */}
      <button 
        className="w-full p-4 flex items-center justify-between text-left bg-gradient-to-r from-white via-white to-voltaris-neutral-50 hover:from-white hover:via-white hover:to-voltaris-neutral-100 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <div className="bg-voltaris-red/5 p-2 rounded-full mr-3">
            <Compass size={20} className="text-voltaris-red" />
          </div>
          <h3 className="text-xl font-bold text-voltaris-neutral-800">Ackermann Direksiyon Prensibinin Matematiği</h3>
        </div>
        <div className="flex items-center">
          <span className="text-xs mr-2 bg-voltaris-blue/10 text-voltaris-blue px-2 py-1 rounded">Teknik</span>
          {isOpen ? 
            <ChevronUp size={24} className="text-voltaris-red" /> : 
            <ChevronDown size={24} className="text-voltaris-red" />
          }
        </div>
      </button>

      {/* Content - conditionally rendered */}
      {isOpen && (
        <div className="p-6 text-voltaris-neutral-700 bg-white">
          <div className="space-y-6">
            {/* Ackermann Diagram */}
            <AckermannDiagram />
            
            {/* Forward Kinematics */}
            <div className="border-l-2 border-voltaris-red/80 pl-4 py-2">
              <h4 className="text-lg font-semibold text-voltaris-red mb-3">Ackermann Modeli</h4>
              <p className="mb-4">Ackermann direksiyon geometrisi, araç viraj alırken, her bir ön tekerleğin kendi dönüş merkezine doğru yönlendirilmesini sağlayan mekanizmadır.</p>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} R = \\frac{B}{2} \\left(\\frac{\\dot{\\phi_{RL}} + \\dot{\\phi_{RR}}} {\\dot{\\phi_{RL}} - \\dot{\\phi_{RR}}}\\right) \\end{align}"} />
              </div>
              
              <p className="mb-4">Burada R dönüş yarıçapını, B araç genişliğini, ve <StyledInlineMath math={"\\dot{\\phi_{RL}}"} /> ile <StyledInlineMath math={"\\dot{\\phi_{RR}}"} /> sırasıyla sol ve sağ arka tekerleklerin açısal hızlarını temsil eder.</p>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} \\beta_{FL} &= -\\mathrm{atan}\\left(\\frac{l}{R+B/2}\\right) \\\\ \\beta_{FR} &= -\\mathrm{atan}\\left(\\frac{l}{R-B/2}\\right) \\end{align}"} />
              </div>
              
              <p className="mb-4">Ön tekerleklerin açıları (<StyledInlineMath math={"\\beta_{FL}"} /> ve <StyledInlineMath math={"\\beta_{FR}"} />), dingil mesafesi (l) ve dönüş yarıçapı (R) kullanılarak hesaplanır.</p>
            </div>
            
            {/* Ackermann Condition */}
            <div className="border-l-2 border-voltaris-blue/80 pl-4 py-2">
              <h4 className="text-lg font-semibold text-voltaris-blue mb-3">Tekerlek Hızları ve Ackermann Koşulu</h4>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} {^{ICR}V_{FL}} &= {^{ICR}V_{ICR}} + \\dot{\\theta}\\vec{k} \\times \\dot{^{ICR}P_{FL}} \\notag \\\\ \\left[\\begin{matrix} V_{FL} cos\\left(-\\beta_{FL}\\right) \\\\ -V_{FL} sin\\left(-\\beta_{FL}\\right) \\\\ 0 \\end{matrix}\\right] &= 0 + \\left[\\begin{matrix} 0 \\\\ 0 \\\\ \\dot{\\theta} \\end{matrix}\\right] \\times \\left[\\begin{matrix} l \\\\ R+B/2 \\\\ 0 \\end{matrix}\\right] \\notag \\\\ & \\Rightarrow V_{FL} = |\\dot{\\theta}| \\sqrt{l^2 + \\left(R+B/2\\right)^2} = r\\dot{\\phi_{FL}} \\end{align}"} />
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} {^{ICR}V_{FR}} &= {^{ICR}V_{ICR}} + \\dot{\\theta}\\vec{k} \\times \\dot{^{ICR}P_{FR}} \\notag \\\\ \\left[\\begin{matrix} V_{FR} cos\\left(-\\beta_{FR}\\right) \\\\ -V_{FR} sin\\left(-\\beta_{FR}\\right) \\\\ 0 \\end{matrix}\\right] &= 0 + \\left[\\begin{matrix} 0 \\\\ 0 \\\\ \\dot{\\theta} \\end{matrix}\\right] \\times \\left[\\begin{matrix} l \\\\ R-B/2 \\\\ 0 \\end{matrix}\\right] \\notag \\\\ & \\Rightarrow V_{FR} = |\\dot{\\theta}| \\sqrt{l^2 + \\left(R-B/2\\right)^2} = r\\dot{\\phi_{FR}} \\end{align}"} />
              </div>
              
              <p className="mb-4">Ackermann geometrisi sayesinde, viraj alırken iç ve dış tekerlekler farklı açılarda dönerek pürüzsüz ve kaymasız bir dönüş sağlar.</p>
            </div>
            
            {/* Hole Theory */}
            <div className="border-l-2 border-voltaris-red/80 pl-4 py-2">
              <h4 className="text-lg font-semibold text-voltaris-red mb-3">Tekerlek-Yol Teması ve Hole Teorisi</h4>
              
              <p className="mb-4">Ackermann modelinde tekerleklerin yola temas noktaları, hareket sırasında "hole" olarak adlandırılan konumsal özellikler gösterir. Bu özellikler, tekerleklerin yerle temas ettiği noktanın hızlarını ve dolayısıyla aracın genel davranışını belirler.</p>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} \\vec{v}_h &= \\vec{v}_c + \\vec{\\omega} \\times \\vec{r}_{c/h} \\\\ &= 0 + \\omega \\hat{k} \\times \\vec{r}_{c/h} \\\\ &= \\omega \\hat{k} \\times \\vec{r}_{c/h} \\end{align}"} />
              </div>
              
              <p className="mb-4">Burada <StyledInlineMath math={"\\vec{v}_h"} /> bir hole'un hızını, <StyledInlineMath math={"\\vec{v}_c"} /> tekerleğin merkez hızını (sıfır) ve <StyledInlineMath math={"\\vec{r}_{c/h}"} /> merkez ile hole arasındaki mesafe vektörünü temsil eder. <StyledInlineMath math={"\\vec{\\omega}"} /> açısal hız vektörüdür.</p>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} \\vec{v}_h = \\omega \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 0 & 0 & 1 \\\\ r_x & r_y & 0 \\end{vmatrix} = \\omega(-r_y \\hat{i} + r_x \\hat{j}) \\end{align}"} />
              </div>
              
              <p className="mb-4">Tekerleklerin kayma olmadan yuvarlanma koşulu, hole noktasının anlık hızının tekerleğin dönme eksenine paralel olmasını gerektirir. Bu durum, Ackermann geometrisinin temel matematiğini oluşturur ve şöyle ifade edilir:</p>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{align} \\vec{v}_h \\cdot \\hat{n} = 0 \\end{align}"} />
              </div>
              
              <p className="mb-4">Burada <StyledInlineMath math={"\\hat{n}"} /> tekerleğin dönme eksenine dik olan birim vektörü temsil eder. Bu denklem, her tekerlek için hole hareket kısıtlamalarını tanımlar ve ideal (kaymasız) Ackermann direksiyon mekaniğini oluşturur.</p>
            </div>
            
            {/* Mobile Car Inputs */}
            <div className="border-l-2 border-voltaris-red/80 pl-4 py-2">
              <h4 className="text-lg font-semibold text-voltaris-red mb-3">Aracın Kinetiği</h4>
              
              <div className="bg-white p-4 rounded-lg border border-voltaris-neutral-200 mb-4 overflow-x-auto katex-container">
                <BlockMath math={"\\begin{equation} \\left[\\begin{matrix} \\dot{X} \\\\ \\dot{Y} \\\\ \\dot{\\theta} \\\\ \\dot{\\psi}\\end{matrix}\\right] = \\left[\\begin{matrix} cos\\theta & 0 \\\\ sin\\theta & 0 \\\\ \\frac{1}{l}tan\\psi & 0 \\\\ 0 & 1\\end{matrix}\\right] \\left[\\begin{matrix} V \\\\ \\dot{\\psi}\\end{matrix}\\right] \\end{equation}"} />
              </div>
              
              <p className="text-sm mb-4">Burada V aracın doğrusal hızını, <StyledInlineMath math={"\\dot{\\psi}"} /> direksiyon açısının değişim hızını, <StyledInlineMath math={"\\dot{X}"} /> ve <StyledInlineMath math={"\\dot{Y}"} /> aracın global koordinatlardaki hızını, <StyledInlineMath math={"\\dot{\\theta}"} /> aracın dönüş hızını gösterir.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AckermannPrinciple; 