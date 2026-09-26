import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Pause, Play, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

export default function StoryModal({ highlight, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const stories = highlight.stories || [];
  const currentStory = stories[currentIndex];
  const storyDuration = 6000; // 6 seconds per story

  useEffect(() => {
    if (isPaused) return;

    const interval = 50;
    const step = (interval / storyDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < stories.length - 1) {
            setCurrentIndex((c) => c + 1);
            return 0;
          } else {
            clearInterval(timer);
            onClose();
            return 100;
          }
        }
        return prev + step;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, stories.length, onClose]);

  const handleNext = (e) => {
    e.stopPropagation();
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((c) => c + 1);
      setProgress(0);
    } else {
      onClose();
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setCurrentIndex((c) => c - 1);
      setProgress(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.88)",
        backdropFilter: "blur(18px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "430px",
          height: "85vh",
          maxHeight: "750px",
          borderRadius: "28px",
          overflow: "hidden",
          background: "#0c0d12",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139,92,246,0.2)",
          display: "flex",
          flexDirection: "column",
          userSelect: "none"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Progress Bars */}
        <div style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          right: "14px",
          display: "flex",
          gap: "6px",
          zIndex: 30
        }}>
          {stories.map((_, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                height: "3px",
                background: "rgba(255,255,255,0.25)",
                borderRadius: "4px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "#ffffff",
                  borderRadius: "4px",
                  width: idx < currentIndex ? "100%" : idx === currentIndex ? `${progress}%` : "0%",
                  transition: idx === currentIndex ? "width 0.05s linear" : "none"
                }}
              />
            </div>
          ))}
        </div>

        {/* Story Header */}
        <div style={{
          position: "absolute",
          top: "28px",
          left: "16px",
          right: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 30
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: highlight.gradient,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.4)"
            }}>
              <highlight.coverIcon size={18} color="#fff" />
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <span style={{ fontWeight: 700, fontSize: "14px", color: "#fff" }}>
                  {highlight.title}
                </span>
                <CheckCircle2 size={13} color="#38bdf8" />
              </div>
              <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)" }}>
                Story {currentIndex + 1} of {stories.length}
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              onClick={() => setIsPaused(!isPaused)}
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              {isPaused ? <Play size={15} /> : <Pause size={15} />}
            </button>
            <button
              onClick={onClose}
              style={{
                background: "rgba(0,0,0,0.4)",
                border: "none",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Ambient Gradient Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 20%, ${highlight.gradient.includes("#") ? "rgba(139,92,246,0.3)" : "rgba(59,130,246,0.3)"}, #090a0f 80%)`,
          zIndex: 1
        }} />

        {/* Interactive Tap Zones */}
        <div
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "80px",
            bottom: "80px",
            left: 0,
            width: "35%",
            zIndex: 25,
            cursor: "pointer"
          }}
        />
        <div
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "80px",
            bottom: "80px",
            right: 0,
            width: "65%",
            zIndex: 25,
            cursor: "pointer"
          }}
        />

        {/* Story Body Card */}
        <div style={{
          position: "relative",
          zIndex: 10,
          flex: 1,
          padding: "85px 24px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
          overflowY: "auto"
        }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.25 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "20px",
                padding: "24px 20px",
                backdropFilter: "blur(12px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
              }}
            >
              {/* Type 1: Intro Story */}
              {currentStory.type === "intro" && (
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(245,158,11,0.2)",
                    color: "#f59e0b",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "12px"
                  }}>
                    {currentStory.tag}
                  </span>
                  <h3 style={{ fontSize: "24px", fontWeight: 800, marginBottom: "4px" }}>
                    {currentStory.title}
                  </h3>
                  <p style={{ color: "#38bdf8", fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
                    {currentStory.subtitle}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.85)", lineHeight: 1.6, fontSize: "14px" }}>
                    {currentStory.content}
                  </p>
                  {currentStory.highlightBadge && (
                    <div style={{
                      marginTop: "20px",
                      padding: "10px 14px",
                      borderRadius: "12px",
                      background: "rgba(139,92,246,0.15)",
                      border: "1px solid rgba(139,92,246,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#c084fc"
                    }}>
                      <Sparkles size={16} />
                      {currentStory.highlightBadge}
                    </div>
                  )}
                </div>
              )}

              {/* Type 2: Core Strengths */}
              {currentStory.type === "strengths" && (
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(16,185,129,0.2)",
                    color: "#10b981",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "12px"
                  }}>
                    {currentStory.tag}
                  </span>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "18px" }}>
                    {currentStory.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {currentStory.bullets.map((b, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <div style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: "#10b981",
                          color: "#000",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: "2px"
                        }}>✓</div>
                        <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 3: Experience */}
              {currentStory.company && (
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                    <span style={{
                      padding: "4px 10px",
                      borderRadius: "100px",
                      background: "rgba(59,130,246,0.2)",
                      color: "#60a5fa",
                      fontSize: "11px",
                      fontWeight: 700
                    }}>
                      {currentStory.type}
                    </span>
                    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
                      {currentStory.period}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "4px" }}>
                    {currentStory.role}
                  </h3>
                  <p style={{ color: "#38bdf8", fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>
                    @{currentStory.company}
                  </p>
                  <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {currentStory.points.map((pt, i) => (
                      <li key={i} style={{ fontSize: "13px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Type 4: Tech Stack */}
              {currentStory.category && (
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(16,185,129,0.2)",
                    color: "#34d399",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: "12px"
                  }}>
                    SKILL MATRIX
                  </span>
                  <h3 style={{ fontSize: "22px", fontWeight: 800, marginBottom: "16px" }}>
                    {currentStory.category}
                  </h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {currentStory.skills.map((s, i) => (
                      <span
                        key={i}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "10px",
                          background: "rgba(255,255,255,0.08)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: "#f1f5f9"
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Type 5: Education */}
              {currentStory.degree && (
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(168,85,247,0.2)",
                    color: "#c084fc",
                    fontSize: "11px",
                    fontWeight: 700,
                    marginBottom: "12px"
                  }}>
                    EDUCATION
                  </span>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "6px" }}>
                    {currentStory.degree}
                  </h3>
                  <p style={{ color: "#38bdf8", fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>
                    {currentStory.institution}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginBottom: "16px" }}>
                    {currentStory.period}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "13px", lineHeight: 1.6 }}>
                    {currentStory.details}
                  </p>
                </div>
              )}

              {/* Type 6: Certifications */}
              {currentStory.items && (
                <div>
                  <span style={{
                    display: "inline-block",
                    padding: "4px 10px",
                    borderRadius: "100px",
                    background: "rgba(245,158,11,0.2)",
                    color: "#fbbf24",
                    fontSize: "11px",
                    fontWeight: 700,
                    marginBottom: "12px"
                  }}>
                    CERTIFICATIONS
                  </span>
                  <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "14px" }}>
                    {currentStory.title}
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", maxHeight: "300px", overflowY: "auto" }}>
                    {currentStory.items.map((it, i) => (
                      <div
                        key={i}
                        style={{
                          padding: "8px 12px",
                          borderRadius: "8px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.9)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px"
                        }}
                      >
                        <span style={{ color: "#fbbf24" }}>★</span>
                        <span>{it}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer info in Story */}
        <div style={{
          position: "relative",
          zIndex: 30,
          padding: "12px 18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(0,0,0,0.5)"
        }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>
            Tap right for next · Tap left for prev
          </span>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                color: "#fff",
                cursor: currentIndex === 0 ? "default" : "pointer",
                opacity: currentIndex === 0 ? 0.3 : 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                borderRadius: "50%",
                width: "28px",
                height: "28px",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
