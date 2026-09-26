import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Grid, PlaySquare, Award, CheckCircle2,
  Download, Mail, Phone, ExternalLink, MapPin, Sparkles,
  Heart, MessageCircle, Github, Linkedin, Plus, Send,
  UserCheck, Bookmark, ArrowLeft
} from "lucide-react";

import { USER_INFO, STORY_HIGHLIGHTS, POSTS, REELS, TAGGED } from "../../data/instaData";
import StoryModal from "./StoryModal";
import PostModal from "./PostModal";

export default function InstagramPortfolio() {
  const [activeTab, setActiveTab] = useState("posts"); // "posts" | "reels" | "tagged"
  const [activeStory, setActiveStory] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(842);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFollowToggle = () => {
    if (isFollowing) {
      setIsFollowing(false);
      setFollowersCount((prev) => prev - 1);
    } else {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
    }
  };

  const handleQuickMessage = () => {
    window.location.href = `mailto:${USER_INFO.email}?subject=Job Opportunity / Interview Inquiry for ${USER_INFO.name}`;
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "#000000",
      color: "#f8fafc",
      fontFamily: "var(--font-sans)",
      paddingBottom: isMobile ? "90px" : "60px",
      position: "relative"
    }}>
      {/* 1. TOP INSTAGRAM NAV BAR */}
      <header className="insta-header" style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(0, 0, 0, 0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "12px 18px"
      }}>
        <div style={{
          maxWidth: "975px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}>
          {/* Logo & Sub-tag */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span className="insta-logo-text" style={{
              fontFamily: "'Space Grotesk', cursive, sans-serif",
              fontSize: "22px",
              fontWeight: 800,
              background: "var(--insta-gradient)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em"
            }}>
              Instagram
            </span>
            <span style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px" }}>|</span>
            <span style={{ fontSize: "12px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>
              dev.resume
            </span>
          </div>

          {/* Action Buttons: Resume, GitHub, LinkedIn */}
          <div className="header-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href={USER_INFO.resumeUrl}
              download="GobiKrishnan_Resume.pdf"
              className="resume-btn"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "7px 14px",
                borderRadius: "100px",
                background: "linear-gradient(135deg, #0095f6, #8b5cf6)",
                color: "#fff",
                fontSize: "12px",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(0, 149, 246, 0.35)",
                whiteSpace: "nowrap"
              }}
            >
              <Download size={13} />
              <span>Resume PDF</span>
            </a>

            <a
              href={USER_INFO.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#fff", opacity: 0.85, display: "flex", alignItems: "center", padding: "4px" }}
              aria-label="GitHub"
            >
              <Github size={19} />
            </a>

            <a
              href={USER_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#38bdf8", display: "flex", alignItems: "center", padding: "4px" }}
              aria-label="LinkedIn"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>
      </header>

      {/* 2. MAIN PROFILE CONTAINER */}
      <main style={{
        maxWidth: "975px",
        margin: "0 auto",
        padding: isMobile ? "18px 16px" : "32px 20px"
      }}>
        
        {/* PROFILE HEADER: Optimized for Desktop and Native Instagram Mobile */}
        <section className="profile-section" style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "16px" : "40px",
          alignItems: "flex-start",
          marginBottom: isMobile ? "24px" : "40px"
        }}>
          
          {/* Top Row on Mobile: Avatar on Left + (Posts, Followers, Tech) Stats on Right */}
          <div className="profile-top-row" style={{
            display: "flex",
            alignItems: "center",
            width: isMobile ? "100%" : "auto",
            gap: isMobile ? "20px" : "0"
          }}>
            {/* Story Avatar */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <motion.div
                whileTap={{ scale: 0.94 }}
                onClick={() => setActiveStory(STORY_HIGHLIGHTS[0])}
                className="profile-avatar-container"
                style={{
                  position: "relative",
                  width: isMobile ? "86px" : "150px",
                  height: isMobile ? "86px" : "150px",
                  borderRadius: "50%",
                  padding: "3px",
                  background: "var(--insta-gradient)",
                  cursor: "pointer",
                  boxShadow: "0 0 20px rgba(220, 39, 67, 0.25)",
                  flexShrink: 0
                }}
              >
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: isMobile ? "3px solid #000" : "4px solid #000",
                  background: "#1e293b"
                }}>
                  <img
                    src={USER_INFO.avatar}
                    alt={USER_INFO.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Online pulse dot */}
                <div style={{
                  position: "absolute",
                  bottom: isMobile ? "2px" : "4px",
                  right: isMobile ? "2px" : "4px",
                  background: "#10b981",
                  border: "2px solid #000",
                  width: isMobile ? "18px" : "24px",
                  height: isMobile ? "18px" : "24px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 8px #10b981"
                }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#fff" }} />
                </div>
              </motion.div>
              {!isMobile && (
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "8px" }}>
                  Tap to view story
                </span>
              )}
            </div>

            {/* If Mobile: Stats directly adjacent to avatar (exact Instagram pattern) */}
            {isMobile && (
              <div className="stats-row" style={{
                display: "flex",
                flex: 1,
                justifyContent: "space-around",
                alignItems: "center"
              }}>
                <div className="stat-item" style={{ textAlign: "center" }}>
                  <div className="stat-num" style={{ fontSize: "17px", fontWeight: 800, color: "#fff" }}>3</div>
                  <div className="stat-label" style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>apps</div>
                </div>
                <div className="stat-item" style={{ textAlign: "center" }}>
                  <div className="stat-num" style={{ fontSize: "17px", fontWeight: 800, color: "#fff" }}>{followersCount}</div>
                  <div className="stat-label" style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>followers</div>
                </div>
                <div className="stat-item" style={{ textAlign: "center" }}>
                  <div className="stat-num" style={{ fontSize: "17px", fontWeight: 800, color: "#fff" }}>21+</div>
                  <div className="stat-label" style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>skills</div>
                </div>
              </div>
            )}
          </div>

          {/* Profile Details & Bio */}
          <div className="profile-bio-container" style={{ flex: 1, width: "100%" }}>
            
            {/* Desktop Top Row (Username + Action Buttons) */}
            {!isMobile && (
              <div style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "18px"
              }}>
                <h1 style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}>
                  <span>{USER_INFO.username}</span>
                  <CheckCircle2 size={18} fill="#0095f6" color="#000" />
                </h1>

                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    onClick={handleFollowToggle}
                    style={{
                      padding: "7px 20px",
                      borderRadius: "8px",
                      border: "none",
                      background: isFollowing ? "rgba(255,255,255,0.12)" : "#0095f6",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "13px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    {isFollowing ? <><UserCheck size={14} /> Connected</> : <><Plus size={14} /> Hire Gobi</>}
                  </button>

                  <button
                    onClick={handleQuickMessage}
                    style={{
                      padding: "7px 18px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "13px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <Send size={14} /> Message
                  </button>

                  <a
                    href={`tel:${USER_INFO.phone}`}
                    style={{
                      padding: "7px 14px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255,255,255,0.15)",
                      background: "rgba(255,255,255,0.06)",
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "13px",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <Phone size={14} /> Call
                  </a>
                </div>
              </div>
            )}

            {/* Desktop Stats Row */}
            {!isMobile && (
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                marginBottom: "16px",
                fontSize: "14px"
              }}>
                <div>
                  <span style={{ fontWeight: 800, color: "#fff", marginRight: "4px" }}>3</span>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>featured apps</span>
                </div>
                <div>
                  <span style={{ fontWeight: 800, color: "#fff", marginRight: "4px" }}>{followersCount}</span>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>followers</span>
                </div>
                <div>
                  <span style={{ fontWeight: 800, color: "#fff", marginRight: "4px" }}>21+</span>
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>technologies</span>
                </div>
              </div>
            )}

            {/* Name, Pronouns & Title */}
            <div style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontWeight: 800, fontSize: isMobile ? "15px" : "16px", color: "#fff" }}>
                  {USER_INFO.name}
                </span>
                <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
                  ({USER_INFO.pronouns})
                </span>
                {isMobile && <CheckCircle2 size={15} fill="#0095f6" color="#000" />}
              </div>
              <div style={{ color: "#38bdf8", fontWeight: 600, fontSize: isMobile ? "13px" : "14px", marginTop: "2px" }}>
                {USER_INFO.roleTitle}
              </div>
            </div>

            {/* Bio Points */}
            <div style={{
              fontSize: isMobile ? "13px" : "13.5px",
              lineHeight: 1.55,
              color: "rgba(255,255,255,0.88)",
              display: "flex",
              flexDirection: "column",
              gap: "3px",
              marginBottom: "12px"
            }}>
              {USER_INFO.bio.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>

            {/* Location & Links */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.65)"
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <MapPin size={12} color="#f43f5e" />
                {USER_INFO.location}
              </span>
              <a
                href={USER_INFO.website}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  color: "#0095f6",
                  textDecoration: "none",
                  fontWeight: 600
                }}
              >
                <ExternalLink size={12} />
                gobikrishnan.vercel.app
              </a>
              <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Mail size={12} color="#a78bfa" />
                {USER_INFO.email}
              </span>
            </div>

            {/* Quick Badge Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
              {USER_INFO.quickBadges.map((badge, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    padding: "3px 9px",
                    borderRadius: "100px",
                    background: `${badge.color}15`,
                    border: `1px solid ${badge.color}40`,
                    fontSize: "11px",
                    fontWeight: 700,
                    color: badge.color
                  }}
                >
                  <badge.icon size={11} />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Mobile Action Buttons (Full width grid) */}
            {isMobile && (
              <div className="action-buttons-row" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr auto",
                gap: "8px",
                width: "100%",
                marginTop: "16px"
              }}>
                <button
                  onClick={handleFollowToggle}
                  className="action-btn"
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    background: isFollowing ? "rgba(255,255,255,0.12)" : "#0095f6",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "13px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}
                >
                  {isFollowing ? <><UserCheck size={14} /> Connected</> : <><Plus size={14} /> Hire Gobi</>}
                </button>

                <button
                  onClick={handleQuickMessage}
                  className="action-btn"
                  style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "13px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px"
                  }}
                >
                  <Send size={14} /> Message
                </button>

                <a
                  href={`tel:${USER_INFO.phone}`}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.06)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none"
                  }}
                  aria-label="Call Gobi"
                >
                  <Phone size={15} />
                </a>
              </div>
            )}
          </div>
        </section>

        {/* 3. STORY HIGHLIGHTS BUBBLES */}
        <section className="no-scrollbar" style={{
          marginBottom: isMobile ? "16px" : "32px",
          overflowX: "auto",
          paddingBottom: "10px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          margin: isMobile ? "0 -16px 16px -16px" : "0 0 32px 0",
          padding: isMobile ? "0 16px 10px 16px" : "0 0 10px 0"
        }}>
          <div style={{ display: "flex", gap: isMobile ? "14px" : "22px", minWidth: "max-content" }}>
            {STORY_HIGHLIGHTS.map((highlight) => (
              <motion.div
                key={highlight.id}
                whileTap={{ scale: 0.94 }}
                onClick={() => setActiveStory(highlight)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  cursor: "pointer",
                  width: isMobile ? "64px" : "78px"
                }}
              >
                {/* Circle Story Icon */}
                <div style={{
                  width: isMobile ? "58px" : "68px",
                  height: isMobile ? "58px" : "68px",
                  borderRadius: "50%",
                  padding: "2.5px",
                  background: highlight.gradient,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                  marginBottom: "6px"
                }}>
                  <div style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background: "#0c0d12",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid #000"
                  }}>
                    <highlight.coverIcon size={isMobile ? 20 : 24} color="#fff" />
                  </div>
                </div>
                <span style={{
                  fontSize: isMobile ? "10.5px" : "11px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.9)",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "100%"
                }}>
                  {highlight.title}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. INSTAGRAM TAB SELECTOR */}
        <div className="insta-tabs" style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "0" : "60px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginBottom: isMobile ? "12px" : "24px"
        }}>
          <button
            onClick={() => setActiveTab("posts")}
            className="insta-tab-btn"
            style={{
              padding: isMobile ? "12px 4px" : "16px 0",
              border: "none",
              borderTop: activeTab === "posts" ? "2px solid #fff" : "2px solid transparent",
              background: "transparent",
              color: activeTab === "posts" ? "#fff" : "rgba(255,255,255,0.4)",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer"
            }}
          >
            <Grid size={16} />
            <span className="tab-label-text">POSTS (PROJECTS)</span>
            {isMobile && <span style={{ fontSize: "11px" }}>Projects</span>}
          </button>

          <button
            onClick={() => setActiveTab("reels")}
            className="insta-tab-btn"
            style={{
              padding: isMobile ? "12px 4px" : "16px 0",
              border: "none",
              borderTop: activeTab === "reels" ? "2px solid #fff" : "2px solid transparent",
              background: "transparent",
              color: activeTab === "reels" ? "#fff" : "rgba(255,255,255,0.4)",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer"
            }}
          >
            <PlaySquare size={16} />
            <span className="tab-label-text">REELS (TECH STACKS)</span>
            {isMobile && <span style={{ fontSize: "11px" }}>Tech Stacks</span>}
          </button>

          <button
            onClick={() => setActiveTab("tagged")}
            className="insta-tab-btn"
            style={{
              padding: isMobile ? "12px 4px" : "16px 0",
              border: "none",
              borderTop: activeTab === "tagged" ? "2px solid #fff" : "2px solid transparent",
              background: "transparent",
              color: activeTab === "tagged" ? "#fff" : "rgba(255,255,255,0.4)",
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer"
            }}
          >
            <Award size={16} />
            <span className="tab-label-text">TAGGED (CERTS)</span>
            {isMobile && <span style={{ fontSize: "11px" }}>Tagged</span>}
          </button>
        </div>

        {/* 5. TAB 1: POSTS GRID (Mobile 3-Column Square tiles like Instagram) */}
        {activeTab === "posts" && (
          <div className="posts-grid" style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(3, 1fr)" : "repeat(auto-fill, minmax(290px, 1fr))",
            gap: isMobile ? "3px" : "20px"
          }}>
            {POSTS.map((post) => (
              <motion.div
                key={post.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActivePost(post)}
                className="post-card-mobile"
                style={{
                  position: "relative",
                  aspectRatio: "1 / 1",
                  borderRadius: isMobile ? "0" : "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "#11131a",
                  border: isMobile ? "none" : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isMobile ? "none" : "0 10px 30px rgba(0,0,0,0.5)"
                }}
              >
                {/* Background visual card preview */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 80% 20%, rgba(139,92,246,0.18), transparent 70%), linear-gradient(180deg, #131622 0%, #0a0b10 100%)`,
                  padding: isMobile ? "10px 8px" : "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between"
                }}>
                  {/* Top indicator */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{
                      padding: isMobile ? "2px 6px" : "4px 10px",
                      borderRadius: "100px",
                      background: "rgba(255,255,255,0.08)",
                      fontSize: isMobile ? "9px" : "11px",
                      fontWeight: 600,
                      color: "rgba(255,255,255,0.75)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: isMobile ? "80%" : "auto"
                    }}>
                      {isMobile ? post.title.split(" ")[0] : post.category}
                    </span>
                    <Sparkles size={isMobile ? 12 : 16} color="#38bdf8" />
                  </div>

                  {/* Center Title & Subtitle */}
                  <div>
                    <h3 style={{
                      fontSize: isMobile ? "13px" : "22px",
                      fontWeight: 800,
                      background: post.accentGradient,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      marginBottom: isMobile ? "2px" : "6px",
                      lineHeight: 1.2
                    }}>
                      {post.title}
                    </h3>
                    <p style={{
                      fontSize: isMobile ? "10px" : "12px",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.3,
                      display: "-webkit-box",
                      WebkitLineClamp: isMobile ? 2 : 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden"
                    }}>
                      {post.tagline}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? "3px" : "6px" }}>
                    {post.tech.slice(0, isMobile ? 2 : 3).map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: isMobile ? "8px" : "10px",
                          fontWeight: 700,
                          padding: isMobile ? "2px 4px" : "3px 8px",
                          borderRadius: "4px",
                          background: "rgba(255,255,255,0.06)",
                          color: "#cbd5e1"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Desktop Hover Overlay: Likes & Comments */}
                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "rgba(0,0,0,0.75)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "24px",
                      zIndex: 20
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontWeight: 700, fontSize: "16px" }}>
                      <Heart size={20} fill="#fff" />
                      <span>{post.likes}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#fff", fontWeight: 700, fontSize: "16px" }}>
                      <MessageCircle size={20} fill="#fff" />
                      <span>{post.commentsCount}</span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* 6. TAB 2: REELS (Tech Stack & Architecture Showcase) */}
        {activeTab === "reels" && (
          <div className="reels-grid" style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(295px, 1fr))",
            gap: isMobile ? "16px" : "24px"
          }}>
            {REELS.map((reel) => (
              <motion.div
                key={reel.id}
                whileTap={{ scale: 0.98 }}
                className="reel-card-mobile"
                style={{
                  minHeight: isMobile ? "380px" : "480px",
                  borderRadius: "18px",
                  background: "#10121a",
                  border: `1px solid ${reel.color}35`,
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: isMobile ? "18px 16px" : "24px",
                  boxShadow: `0 12px 35px rgba(0,0,0,0.6), 0 0 20px ${reel.color}15`
                }}
              >
                {/* Background Accent glow */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: `radial-gradient(circle at 80% 10%, ${reel.color}25, transparent 65%), linear-gradient(180deg, #131520 0%, #0a0b10 100%)`,
                  zIndex: 0
                }} />

                {/* Top: Category Badge, Duration and Views */}
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                    <span style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "4px 10px",
                      borderRadius: "100px",
                      background: `${reel.color}20`,
                      border: `1px solid ${reel.color}45`,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: reel.color,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em"
                    }}>
                      <PlaySquare size={12} color={reel.color} />
                      {reel.category}
                    </span>

                    <span style={{
                      padding: "3px 8px",
                      borderRadius: "100px",
                      background: "rgba(0,0,0,0.6)",
                      fontSize: "11px",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 600
                    }}>
                      {reel.views} views
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 style={{
                    fontSize: isMobile ? "18px" : "21px",
                    fontWeight: 800,
                    color: "#fff",
                    marginBottom: "4px",
                    lineHeight: 1.25
                  }}>
                    {reel.title}
                  </h3>
                  <div style={{
                    fontSize: "12.5px",
                    color: reel.color,
                    fontWeight: 600,
                    marginBottom: "14px"
                  }}>
                    {reel.subtitle} · <span style={{ color: "#fff", opacity: 0.85 }}>{reel.stats}</span>
                  </div>
                </div>

                {/* Middle: Tech Stack Pills (Properly arranged) */}
                <div style={{ position: "relative", zIndex: 1, margin: "6px 0 14px" }}>
                  <div style={{
                    fontSize: "10.5px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginBottom: "8px"
                  }}>
                    Technologies & Libraries
                  </div>
                  
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {reel.skills?.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        style={{
                          fontSize: isMobile ? "11px" : "12px",
                          fontWeight: 600,
                          padding: isMobile ? "4px 8px" : "5px 10px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "#f1f5f9",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        <span style={{ color: reel.color, fontSize: "10px" }}>●</span>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom: Architectural Highlights & Reel Audio Track Bar */}
                <div style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "12px" }}>
                  <ul style={{
                    paddingLeft: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    marginBottom: "12px"
                  }}>
                    {reel.highlights?.map((hl, hIdx) => (
                      <li key={hIdx} style={{
                        fontSize: isMobile ? "11.5px" : "12px",
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.45
                      }}>
                        {hl}
                      </li>
                    ))}
                  </ul>

                  {/* Reel Music / Audio indicator */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.5)",
                    fontWeight: 600,
                    background: "rgba(0,0,0,0.3)",
                    padding: "6px 10px",
                    borderRadius: "8px"
                  }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      🎵 {reel.badge}
                    </span>
                    <span style={{ color: reel.color, fontWeight: 700 }}>
                      ⚡ Verified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 7. TAB 3: TAGGED (Verified Endorsements & Certs) */}
        {activeTab === "tagged" && (
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fill, minmax(300px, 1fr))",
            gap: isMobile ? "12px" : "24px"
          }}>
            {TAGGED.map((item) => (
              <motion.div
                key={item.id}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: "#11131a",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px",
                  padding: isMobile ? "16px" : "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.5)"
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                    <div style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #8b5cf6, #ec4899)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#fff",
                      fontSize: "13px"
                    }}>
                      ★
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "13px", color: "#fff" }}>
                        {item.author}
                      </div>
                      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                        {item.handle} · {item.badge}
                      </div>
                    </div>
                  </div>

                  <h4 style={{ fontSize: "14px", fontWeight: 700, color: "#38bdf8", marginBottom: "8px" }}>
                    {item.title}
                  </h4>

                  <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.8)", lineHeight: 1.5, fontStyle: "italic", marginBottom: "14px" }}>
                    "{item.quote}"
                  </p>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {item.tags.map((tg, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "10px",
                        fontWeight: 600,
                        color: "#a78bfa"
                      }}
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </main>

      {/* 8. FOOTER */}
      <footer style={{
        textAlign: "center",
        padding: "30px 16px 20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        marginTop: "40px",
        fontSize: "11px",
        color: "rgba(255,255,255,0.4)"
      }}>
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "12px", flexWrap: "wrap" }}>
          <a href={`mailto:${USER_INFO.email}`} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Email</a>
          <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>LinkedIn</a>
          <a href={USER_INFO.github} target="_blank" rel="noreferrer" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>GitHub</a>
          <a href={`tel:${USER_INFO.phone}`} style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>Phone</a>
          <a href={USER_INFO.resumeUrl} download style={{ color: "#0095f6", textDecoration: "none", fontWeight: 700 }}>Resume PDF</a>
        </div>
        <div>
          Instagram Resume · Gobi Krishnan K · Full Stack Engineer © {new Date().getFullYear()}
        </div>
      </footer>

      {/* 9. STORY MODAL VIEWER */}
      <AnimatePresence>
        {activeStory && (
          <StoryModal
            highlight={activeStory}
            onClose={() => setActiveStory(null)}
          />
        )}
      </AnimatePresence>

      {/* 10. POST DETAIL MODAL VIEWER */}
      <AnimatePresence>
        {activePost && (
          <PostModal
            post={activePost}
            onClose={() => setActivePost(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
