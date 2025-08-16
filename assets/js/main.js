// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Initialize EmailJS (Replace with your actual IDs)
emailjs.init("YOUR_PUBLIC_KEY");

// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');
const serviceModal = document.getElementById('service-modal');
const projectModal = document.getElementById('project-modal');

// Service Details Data
const serviceDetails = {
    '2d-planning': {
        title: '2D Planning & Architectural Drawings',
        content: `
            <div class="service-detail">
                <h3>Professional 2D Planning Services</h3>
                <p>We provide comprehensive 2D planning and architectural drawing services that form the foundation of every successful construction project.</p>
                
                <h4>Our 2D Planning Services Include:</h4>
                <ul>
                    <li>Site Plans and Layout Design</li>
                    <li>Floor Plans with Detailed Dimensions</li>
                    <li>Electrical and Plumbing Layouts</li>
                    <li>Structural Drawing Plans</li>
                    <li>Construction Detail Drawings</li>
                    <li>As-Built Drawings</li>
                </ul>
                
                <h4>Why Choose Our 2D Planning?</h4>
                <p>Our experienced team uses industry-standard CAD software to create precise, detailed drawings that meet all regulatory requirements and construction standards.</p>
                
                <div class="service-features">
                    <span class="feature-tag">✓ CAD Drawings</span>
                    <span class="feature-tag">✓ Regulatory Compliance</span>
                    <span class="feature-tag">✓ Quick Turnaround</span>
                    <span class="feature-tag">✓ Unlimited Revisions</span>
                </div>
                
                <div class="service-pricing">
                    <h4>Starting from ₹15,000</h4>
                    <p>Contact us for a detailed quote based on your project requirements.</p>
                </div>
            </div>
        `
    },
    'steel-structure': {
        title: 'Steel Structure Design & Analysis',
        content: `
            <div class="service-detail">
                <h3>Expert Steel Structure Engineering</h3>
                <p>Specialized in designing robust and efficient steel structures for commercial, industrial, and residential applications.</p>
                
                <h4>Steel Structure Services:</h4>
                <ul>
                    <li>Structural Analysis and Design</li>
                    <li>Steel Frame Buildings</li>
                    <li>Industrial Warehouses</li>
                    <li>Bridge Structures</li>
                    <li>Pre-Engineered Buildings (PEB)</li>
                    <li>Connection Design and Detailing</li>
                </ul>
                
                <h4>Technical Expertise:</h4>
                <p>We use advanced structural analysis software like STAAD.Pro, SAP2000, and Tekla Structures to ensure optimal design solutions.</p>
                
                <div class="service-features">
                    <span class="feature-tag">✓ IS 800 Compliance</span>
                    <span class="feature-tag">✓ 3D Modeling</span>
                    <span class="feature-tag">✓ Load Analysis</span>
                    <span class="feature-tag">✓ Cost Optimization</span>
                </div>
                
                <div class="service-pricing">
                    <h4>Starting from ₹50,000</h4>
                    <p>Pricing varies based on structure complexity and project size.</p>
                </div>
            </div>
        `
    },
    '3d-planning': {
        title: '3D Planning & Visualization',
        content: `
            <div class="service-detail">
                <h3>Advanced 3D Planning & Modeling</h3>
                <p>Transform your ideas into stunning 3D visualizations that help you see your project before construction begins.</p>
                
                <h4>3D Planning Services:</h4>
                <ul>
                    <li>3D Architectural Modeling</li>
                    <li>Photorealistic Renderings</li>
                    <li>Virtual Reality Walkthroughs</li>
                    <li>360° Panoramic Views</li>
                    <li>Animation and Fly-throughs</li>
                    <li>BIM (Building Information Modeling)</li>
                </ul>
                
                <h4>Software We Use:</h4>
                <p>AutoCAD 3D, SketchUp Pro, 3ds Max, Revit, and Lumion for creating stunning visualizations.</p>
                
                <div class="service-features">
                    <span class="feature-tag">✓ Photorealistic Quality</span>
                    <span class="feature-tag">✓ Multiple Formats</span>
                    <span class="feature-tag">✓ Interactive Models</span>
                    <span class="feature-tag">✓ Fast Delivery</span>
                </div>
                
                <div class="service-pricing">
                    <h4>Starting from ₹25,000</h4>
                    <p>Includes 3D model, 5 high-quality renders, and basic walkthrough.</p>
                </div>
            </div>
        `
    },
    'elevation': {
        title: 'Elevation Design (2D & 3D)',
        content: `
            <div class="service-detail">
                <h3>Professional Elevation Design</h3>
                <p>Create stunning building facades that combine aesthetic appeal with functional design principles.</p>
                
                <h4>Elevation Design Services:</h4>
                <ul>
                    <li>Front, Side & Rear Elevations</li>
                    <li>Modern Contemporary Designs</li>
                    <li>Traditional Architectural Styles</li>
                    <li>Material and Color Selection</li>
                    <li>Lighting Design Integration</li>
                    <li>Landscape Integration</li>
                </ul>
                
                <h4>Design Styles We Offer:</h4>
                <p>Contemporary, Modern, Traditional, Colonial, Mediterranean, and custom styles tailored to your preferences.</p>
                
                <div class="service-features">
                    <span class="feature-tag">✓ Multiple Style Options</span>
                    <span class="feature-tag">✓ Material Specifications</span>
                    <span class="feature-tag">✓ Color Variations</span>
                    <span class="feature-tag">✓ 2D + 3D Drawings</span>
                </div>
                
                <div class="service-pricing">
                    <h4>Starting from ₹20,000</h4>
                    <p>Includes 2D elevation drawings and 3D rendered views.</p>
                </div>
            </div>
        `
    },
    'interior': {
        title: 'Interior Design & Space Planning',
        content: `
            <div class="service-detail">
                <h3>Creative Interior Design Solutions</h3>
                <p>Transform your interior spaces into functional and aesthetically pleasing environments that reflect your style and needs.</p>
                
                <h4>Interior Design Services:</h4>
                <ul>
                    <li>Space Planning and Layout</li>
                    <li>Furniture Selection and Placement</li>
                    <li>Color Schemes and Material Selection</li>
                    <li>Lighting Design</li>
                    <li>Custom Furniture Design</li>
                    <li>Project Management and Execution</li>
                </ul>
                
                <h4>Specializations:</h4>
                <p>Residential interiors, office spaces, retail stores, restaurants, and hospitality design.</p>
                
                <div class="service-features">
                    <span class="feature-tag">✓ 3D Visualization</span>
                    <span class="feature-tag">✓ Mood Boards</span>
                    <span class="feature-tag">✓ Material Samples</span>
                    <span class="feature-tag">✓ Execution Support</span>
                </div>
                
                <div class="service-pricing">
                    <h4>Starting from ₹30,000</h4>
                    <p>Comprehensive design package with 3D views and material specifications.</p>
                </div>
            </div>
        `
    },
    'estimation': {
        title: 'Cost Estimation & Quantity Surveying',
        content: `
            <div class="service-detail">
                <h3>Accurate Cost Estimation Services</h3>
                <p>Get detailed and accurate cost estimates for your construction project to help you plan your budget effectively.</p>
                
                <h4>Estimation Services:</h4>
                <ul>
                    <li>Detailed Quantity Take-off</li>
                    <li>Material Cost Analysis</li>
                    <li>Labor Cost Estimation</li>
                    <li>Equipment and Machinery Costs</li>
                    <li>Project Schedule and Timeline</li>
                    <li>Risk Assessment and Contingency</li>
                </ul>
                
                <h4>What You Get:</h4>
                <p>Comprehensive estimation report with item-wise breakdown, quantity schedules, and cost analysis.</p>
                
                <div class="service-features">
                    <span class="feature-tag">✓ Detailed BOQ</span>
                    <span class="feature-tag">✓ Market Rates</span>
                    <span class="feature-tag">✓ Excel Reports</span>
                    <span class="feature-tag">✓ Quick Updates</span>
                </div>
                
                <div class="service-pricing">
                    <h4>Starting from ₹10,000</h4>
                    <p>Depends on project size and complexity. Rush delivery available.</p>
                </div>
            </div>
        `
    }
};

// Project Details Data
const projectDetails = {
    'residential': {
        title: 'Luxury Residential Complex',
        content: `
            <div class="project-detail">
                <h3>Modern Residential Complex - Mumbai</h3>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGY5ZmYiLz48cmVjdCB4PSI1MCIgeT0iNTAiIHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMDA3Q0ZGIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=" alt="Residential Complex" style="width: 100%; border-radius: 12px; margin: 1rem 0;">
                
                <div class="project-info-grid">
                    <div class="project-stats">
                        <h4>Project Statistics</h4>
                        <ul>
                            <li><strong>Location:</strong> Bandra, Mumbai</li>
                            <li><strong>Area:</strong> 2.5 Acres</li>
                            <li><strong>Units:</strong> 50 Apartments</li>
                            <li><strong>Floors:</strong> G+15 Stories</li>
                            <li><strong>Completion:</strong> March 2024</li>
                            <li><strong>Value:</strong> ₹85 Crores</li>
                        </ul>
                    </div>
                    
                    <div class="project-features">
                        <h4>Key Features</h4>
                        <ul>
                            <li>Modern Steel Frame Construction</li>
                            <li>Earthquake Resistant Design</li>
                            <li>Green Building Certified</li>
                            <li>Smart Home Integration</li>
                            <li>Rooftop Garden & Amenities</li>
                            <li>Underground Parking</li>
                        </ul>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>This luxury residential complex showcases our expertise in modern construction techniques and sustainable design. The project features a robust steel frame structure designed to withstand seismic activities while maximizing space utilization.</p>
                    
                    <p>Our team provided comprehensive services including 3D planning, steel structure design, interior layouts, and detailed cost estimation, delivering the project on time and within budget.</p>
                </div>
                
                <div class="project-services">
                    <h4>Services Provided:</h4>
                    <span class="service-tag">3D Planning</span>
                    <span class="service-tag">Steel Structure</span>
                    <span class="service-tag">Interior Design</span>
                    <span class="service-tag">Cost Estimation</span>
                    <span class="service-tag">Project Management</span>
                </div>
            </div>
        `
    },
    'commercial': {
        title: 'Modern Office Complex',
        content: `
            <div class="project-detail">
                <h3>Corporate Office Building - Pune</h3>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGY5ZmYiLz48cmVjdCB4PSI3NSIgeT0iNDAiIHdpZHRoPSIzNTAiIGhlaWdodD0iMjIwIiBmaWxsPSIjMDA3Q0ZGIiBvcGFjaXR5PSIwLjI1Ii8+PC9zdmc+" alt="Commercial Building" style="width: 100%; border-radius: 12px; margin: 1rem 0;">
                
                <div class="project-info-grid">
                    <div class="project-stats">
                        <h4>Project Overview</h4>
                        <ul>
                            <li><strong>Location:</strong> Hinjewadi, Pune</li>
                            <li><strong>Built-up Area:</strong> 1.2 Lakh sq.ft</li>
                            <li><strong>Floors:</strong> G+10 Stories</li>
                            <li><strong>Capacity:</strong> 2000+ Employees</li>
                            <li><strong>Status:</strong> Under Construction</li>
                            <li><strong>Expected Completion:</strong> Dec 2025</li>
                        </ul>
                    </div>
                    
                    <div class="project-features">
                        <h4>Special Features</h4>
                        <ul>
                            <li>LEED Gold Certified Design</li>
                            <li>Advanced HVAC Systems</li>
                            <li>Sky Gardens on Every Floor</li>
                            <li>Smart Building Technology</li>
                            <li>Multi-level Parking</li>
                            <li>Conference & Recreation Facilities</li>
                        </ul>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>A state-of-the-art commercial office building designed for a leading IT company. The project emphasizes sustainable construction practices and employee well-being through innovative design solutions.</p>
                    
                    <p>Our engineering team is implementing cutting-edge steel structure techniques to achieve maximum floor plate efficiency while maintaining structural integrity and aesthetic appeal.</p>
                </div>
                
                <div class="project-services">
                    <h4>Services Provided:</h4>
                    <span class="service-tag">2D Planning</span>
                    <span class="service-tag">3D Visualization</span>
                    <span class="service-tag">Steel Structure</span>
                    <span class="service-tag">MEP Design</span>
                    <span class="service-tag">Cost Control</span>
                </div>
            </div>
        `
    },
    'industrial': {
        title: 'Industrial Warehouse Complex',
        content: `
            <div class="project-detail">
                <h3>Logistics Warehouse - Gujarat</h3>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGY5ZmYiLz48cmVjdCB4PSI1MCIgeT0iMTAwIiB3aWR0aD0iNDAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwN0NGRiIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+" alt="Industrial Warehouse" style="width: 100%; border-radius: 12px; margin: 1rem 0;">
                
                <div class="project-info-grid">
                    <div class="project-stats">
                        <h4>Project Specifications</h4>
                        <ul>
                            <li><strong>Location:</strong> Bharuch, Gujarat</li>
                            <li><strong>Area:</strong> 5 Lakh sq.ft</li>
                            <li><strong>Height:</strong> 12 meters clear</li>
                            <li><strong>Capacity:</strong> 50,000 tons</li>
                            <li><strong>Completion:</strong> August 2024</li>
                            <li><strong>Investment:</strong> ₹45 Crores</li>
                        </ul>
                    </div>
                    
                    <div class="project-features">
                        <h4>Engineering Highlights</h4>
                        <ul>
                            <li>Pre-Engineered Steel Building</li>
                            <li>40m x 60m Column-Free Spans</li>
                            <li>Heavy Duty Crane Support</li>
                            <li>Automated Material Handling</li>
                            <li>Fire Safety Systems</li>
                            <li>Temperature Controlled Zones</li>
                        </ul>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>A massive industrial warehouse project designed for efficient logistics operations. The structure features long-span steel framework to maximize storage capacity while ensuring operational flexibility.</p>
                    
                    <p>Our team successfully delivered a cost-effective solution using Pre-Engineered Building (PEB) technology, reducing construction time by 40% compared to conventional methods.</p>
                </div>
                
                <div class="project-services">
                    <h4>Services Provided:</h4>
                    <span class="service-tag">Steel Structure Design</span>
                    <span class="service-tag">PEB Engineering</span>
                    <span class="service-tag">Foundation Design</span>
                    <span class="service-tag">Cost Optimization</span>
                    <span class="service-tag">Construction Supervision</span>
                </div>
            </div>
        `
    },
    'bridge': {
        title: 'Steel Bridge Construction',
        content: `
            <div class="project-detail">
                <h3>River Crossing Bridge - Maharashtra</h3>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDUwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNmMGY5ZmYiLz48cGF0aCBkPSJNNTAgMjMwTDQ1MCAyMzAiIHN0cm9rZT0iIzAwN0NGRiIgc3Ryb2tlLXdpZHRoPSI4Ii8+PGVsbGlwc2UgY3g9IjI1MCIgY3k9IjIwMCIgcng9IjE1MCIgcnk9IjMwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdDRkYiIHN0cm9rZS13aWR0aD0iNCIvPjwvc3ZnPg==" alt="Steel Bridge" style="width: 100%; border-radius: 12px; margin: 1rem 0;">
                
                <div class="project-info-grid">
                    <div class="project-stats">
                        <h4>Bridge Specifications</h4>
                        <ul>
                            <li><strong>Location:</strong> Nashik, Maharashtra</li>
                            <li><strong>Length:</strong> 200 meters</li>
                            <li><strong>Width:</strong> 12 meters</li>
                            <li><strong>Type:</strong> Steel Truss Bridge</li>
                            <li><strong>Status:</strong> Design Phase</li>
                            <li><strong>Budget:</strong> ₹25 Crores</li>
                        </ul>
                    </div>
                    
                    <div class="project-features">
                        <h4>Design Features</h4>
                        <ul>
                            <li>Warren Truss Configuration</li>
                            <li>Seismic Resistant Design</li>
                            <li>100-year Design Life</li>
                            <li>Pedestrian & Cycle Track</li>
                            <li>LED Lighting System</li>
                            <li>Corrosion Protection</li>
                        </ul>
                    </div>
                </div>
                
                <div class="project-description">
                    <p>An ambitious bridge project connecting two major districts across the Godavari river. The design emphasizes both functionality and aesthetic appeal while meeting stringent safety standards.</p>
                    
                    <p>Our engineering approach focuses on optimized steel usage, minimal environmental impact during construction, and long-term durability in the riverine environment.</p>
                </div>
                
                <div class="project-services">
                    <h4>Services in Progress:</h4>
                    <span class="service-tag">Structural Analysis</span>
                    <span class="service-tag">3D Modeling</span>
                    <span class="service-tag">Load Calculations</span>
                    <span class="service-tag">Environmental Assessment</span>
                    <span class="service-tag">Cost Estimation</span>
                </div>
            </div>
        `
    }
};

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';

function initTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
    
    // Animate theme change
    gsap.to('body', {
        duration: 0.3,
        ease: "power2.inOut"
    });
}

function updateThemeIcon() {
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = currentTheme === 'light' ? '🌙' : '☀️';
}

// Mobile Navigation
function toggleMobileNav() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (hamburger.classList.contains('active')) {
        gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.3 });
        gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 });
    } else {
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    // Close mobile nav if open
    if (navMenu.classList.contains('active')) {
        toggleMobileNav();
    }
}

// GSAP Animations
function initAnimations() {
    // Hero Animation
    const heroTl = gsap.timeline();
    heroTl
        .from('.hero-title', { 
            duration: 1, 
            y: 100, 
            opacity: 0, 
            ease: "power3.out" 
        })
        .from('.hero-subtitle', { 
            duration: 0.8, 
            y: 50, 
            opacity: 0, 
            ease: "power2.out" 
        }, "-=0.5")
        // .from('.hero-buttons .btn', { 
        //     duration: 0.6, 
        //     y: 30, 
        //     opacity: 1, 
        //     stagger: 0.2, 
        //     ease: "back.out(1.7)" 
        // }, "-=0.3")
        .from('.spline-viewer', { 
            duration: 1, 
            scale: 0.8, 
            opacity: 0, 
            ease: "power2.out" 
        }, "-=0.8");

    // Service Cards Animation
    gsap.fromTo('.service-card', {
        y: 100,
        opacity: 0,
        scale: 0.8
    }, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Project Cards Animation
    gsap.fromTo('.project-card', {
        y: 80,
        opacity: 0,
        rotationY: -15
    }, {
        y: 0,
        opacity: 1,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });

    // Section Headers Animation
    gsap.fromTo('.section-header', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.section-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        }
    });

    // Contact Form Animation
    gsap.fromTo('.contact-form', {
        x: 50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%'
        }
    });

    gsap.fromTo('.contact-info', {
        x: -50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%'
        }
    });
}

// Reviews Carousel
 const slider = document.getElementById('reviews-slider');
  const prevBtn = document.querySelector('.review-prev');
  const nextBtn = document.querySelector('.review-next');

  let currentIndex = 0;
  const totalSlides = slider.children.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlider();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
  });

// Modal Functions
function openModal(modalId, content) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content > div:last-child');
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    
    // Animate modal
    gsap.fromTo(modal, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
    );
    
    gsap.fromTo(modal.querySelector('.modal-content'),
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
    );
    
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal.style.display === 'block') {
            gsap.to(modal, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
            });
        }
    });
}

// Service Modal Handler
function openServiceModal(serviceKey) {
    const service = serviceDetails[serviceKey];
    if (service) {
        openModal('service-modal', service.content);
    }
}

// Project Modal Handler
function openProjectModal(projectKey) {
    const project = projectDetails[projectKey];
    if (project) {
        openModal('project-modal', project.content);
    }
}

// Form Submission with EmailJS and Validation
async function handleFormSubmission(e) {
    e.preventDefault();

    // Remove previous error messages
    contactForm.querySelectorAll('.form-error').forEach(el => el.remove());

    const formData = new FormData(contactForm);
    const fields = [
        { name: 'name', label: 'Name' },
        { name: 'email', label: 'Email' },
        { name: 'phone', label: 'Phone' },
        { name: 'service', label: 'Service' },
        { name: 'message', label: 'Message' }
    ];
    let hasError = false;

    // Validate fields for blank or whitespace-only values
    fields.forEach(field => {
        const value = (formData.get(field.name) || '').trim();
        if (!value) {
            hasError = true;
            const input = contactForm.querySelector(`[name="${field.name}"]`);
            if (input) {
                const error = document.createElement('div');
                error.className = 'form-error';
                error.style.color = 'red';
                error.style.fontSize = '0.9em';
                error.style.marginTop = '4px';
                error.textContent = `${field.label} is required.`;
                // For textarea, insert after; for input, insert after
                input.parentNode.insertBefore(error, input.nextSibling);
            }
        }
    });

    if (hasError) return;

    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        service: formData.get('service'),
        message: formData.get('message')
    };

    try {
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Use the new EmailJS v3+ init format
        emailjs.init({
            publicKey: "qsqW9cdaPl43N8qVy",
        });

        await emailjs.send(
            "service_qu6b293",
            "template_4o8qz6r",
            templateParams
        );

        // Show success popup
        showSuccessPopup();
        contactForm.reset();

    } catch (error) {
        console.error('Email sending failed:', error);
        alert('Failed to send message. Please try again or contact us directly.');
    } finally {
        // Reset button
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }
}

// Success Popup
function showSuccessPopup() {
    let popup = document.getElementById('success-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'success-popup';
        popup.style.position = 'fixed';
        popup.style.top = '50%';
        popup.style.left = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
        popup.style.background = '#16a34a';
        popup.style.color = '#fff';
        popup.style.padding = '1.5rem 2.5rem';
        popup.style.borderRadius = '12px';
        popup.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
        popup.style.fontSize = '1.2rem';
        popup.style.zIndex = '9999';
        popup.style.display = 'none';
        popup.style.textAlign = 'center';
        popup.innerHTML = 'Your message has been sent successfully!<br>We will contact you soon.';
        document.body.appendChild(popup);
    }
    popup.style.display = 'block';
    gsap.fromTo(popup, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });

    setTimeout(() => {
        gsap.to(popup, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
            onComplete: () => {
                popup.style.display = 'none';
            }
        });
    }, 3500);
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = currentTheme === 'dark' 
                ? 'rgba(15, 23, 42, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Initialize Spline 3D Model (Placeholder function)


// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize everything
    initTheme();
    initAnimations();
    handleNavbarScroll();
   
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Mobile navigation
    hamburger.addEventListener('click', toggleMobileNav);
    
    // Form submission
    contactForm.addEventListener('submit', handleFormSubmission);
    
    // Service card clicks
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', () => {
            const serviceKey = card.getAttribute('data-service');
            openServiceModal(serviceKey);
        });
    });
    
    // Project card clicks
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectKey = card.getAttribute('data-project');
            openProjectModal(projectKey);
        });
    });
    
    // Review navigation
    // document.querySelector('.review-next').addEventListener('click', nextReview);
    // document.querySelector('.review-prev').addEventListener('click', prevReview);
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
        closeBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            closeModal();
        }, { passive: false });
    });
    
    // Close modal on backdrop click (support both click and touchstart)
    document.querySelectorAll('.modal').forEach(modal => {
        function backdropHandler(e) {
            if (e.target === modal) {
                closeModal();
            }
        }
        modal.addEventListener('click', backdropHandler);
        modal.addEventListener('touchstart', function(e) {
            // Only close if the touch is on the backdrop, not modal content
            if (e.target === modal) {
                e.preventDefault();
                closeModal();
            }
        }, { passive: false });
    });
    
    // Navigation links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            scrollToSection(sectionId);
        });
    });
    
    // Smooth scroll for buttons
    document.querySelectorAll('button[onclick*="scrollToSection"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const match = btn.getAttribute('onclick').match(/scrollToSection\('([^']+)'\)/);
            if (match) {
                e.preventDefault();
                scrollToSection(match[1]);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Reviews Slider Responsive
    const reviewsSlider = document.getElementById('reviews-slider');
    const reviewCards = reviewsSlider ? reviewsSlider.querySelectorAll('.review-card') : [];
    const prevBtn = document.querySelector('.review-prev');
    const nextBtn = document.querySelector('.review-next');
    let currentReview = 0;

    function updateSlider() {
        if (!reviewsSlider) return;
        reviewsSlider.style.transform = `translateX(-${currentReview * 100}%)`;
    }

    function showPrevReview() {
        currentReview = (currentReview - 1 + reviewCards.length) % reviewCards.length;
        updateSlider();
    }

    function showNextReview() {
        currentReview = (currentReview + 1) % reviewCards.length;
        updateSlider();
    }

    if (prevBtn && nextBtn && reviewCards.length > 0) {
        prevBtn.addEventListener('click', showPrevReview);
        nextBtn.addEventListener('click', showNextReview);
        updateSlider();
        window.addEventListener('resize', updateSlider);
    }
});

// SEO and Performance Optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Preload critical resources
    const preloadLinks = [
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
    ];
    
    preloadLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = href;
        document.head.appendChild(link);
    });
});

// Global functions for HTML onclick handlers
window.scrollToSection = scrollToSection;
window.toggleTheme = toggleTheme;

window.toggleMobileNav = toggleMobileNav;

