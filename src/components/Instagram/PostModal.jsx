import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Heart, MessageCircle, Send, Bookmark, ExternalLink,
  Code2, Sparkles, Check, Copy, X, ArrowLeft
} from "lucide-react";

export default function PostModal({ post, onClose }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [comments, setComments] = useState([
    { user: "enterprise_lead", text: "Clean architecture! The compound indexing and STOMP sync is top notch 🔥", time: "2h" },
    { user: "react_architect", text: "High quality React 19 frontend integration. Production grade.", time: "4h" }
  ]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
    }
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    setComments([...comments, { user: "recruiter_guest", text: commentInput.trim(), time: "Just now" }]);
    setCommentInput("");
  };

  const copyCode = () => {
    if (post.codeSnippet) {
      navigator.clipboard.writeText(post.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
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
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: isMobile ? "flex-end" : "center",
        justifyContent: "center",
        padding: isMobile ? "0" : "16px"
      }}
      onClick={onClose}
    >
      <motion.div
        initial={isMobile ? { y: "100%" } : { scale: 0.95, y: 20 }}
        animate={isMobile ? { y: 0 } : { scale: 1, y: 0 }}
        exit={isMobile ? { y: "100%" } : { scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          height: isMobile ? "92vh" : "85vh",
          maxHeight: isMobile ? "92vh" : "750px",
          borderRadius: isMobile ? "24px 24px 0 0" : "24px",
          overflow: "hidden",
          background: "#0c0d12",
          border: isMobile ? "none" : "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.8)",
          display: "flex",
          flexDirection: isMobile ? "column" : "row"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag / Header handle */}
        {isMobile && (
          <div style={{
            padding: "12px 16px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "#090a0f"
          }}>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
                padding: "4px"
              }}
            >
              <ArrowLeft size={18} /> Back
            </button>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
              Project Details
            </span>
            <div style={{ width: "24px" }} />
          </div>
        )}

        {/* Desktop Close Button top-right */}
        {!isMobile && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              zIndex: 40,
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              color: "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={18} />
          </button>
        )}

        {/* LEFT COLUMN: Visual Showcase / Code Preview / Architecture */}
        <div style={{
          flex: isMobile ? "0 0 auto" : "1 1 500px",
          background: "linear-gradient(145deg, #10121a, #07080c)",
          borderRight: isMobile ? "none" : "1px solid rgba(255,255,255,0.08)",
          borderBottom: isMobile ? "1px solid rgba(255,255,255,0.08)" : "none",
          display: "flex",
          flexDirection: "column",
          padding: isMobile ? "16px" : "32px 28px",
          maxHeight: isMobile ? "45vh" : "100%",
          overflowY: isMobile ? "auto" : "visible",
          justifyContent: "space-between"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: isMobile ? "10px" : "18px" }}>
              <span style={{
                padding: "4px 10px",
                borderRadius: "100px",
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                fontSize: "11px",
                fontWeight: 600,
                color: "#94a3b8"
              }}>
                {post.category}
              </span>
              <div style={{ display: "flex", gap: "5px" }}>
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10b981" }} />
              </div>
            </div>

            <h2 style={{
              fontSize: isMobile ? "20px" : "2.2rem",
              fontWeight: 800,
              background: post.accentGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4px"
            }}>
              {post.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? "12px" : "14px", fontWeight: 500, marginBottom: isMobile ? "12px" : "20px" }}>
              {post.tagline}
            </p>

            {/* Metrics Chips */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: isMobile ? "12px" : "20px" }}>
              {post.metrics?.map((m, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "10px",
                    padding: isMobile ? "8px 4px" : "12px",
                    textAlign: "center"
                  }}
                >
                  <div style={{ fontSize: isMobile ? "13px" : "16px", fontWeight: 700, color: "#fff" }}>{m.value}</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginTop: "2px" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Code Snippet */}
            {post.codeSnippet && (
              <div style={{
                position: "relative",
                background: "#08090d",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "12px",
                fontFamily: "monospace",
                fontSize: isMobile ? "10px" : "12px",
                color: "#a5b4fc",
                overflowX: "auto"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>SNIPPET</span>
                  <button
                    onClick={copyCode}
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "none",
                      color: "#fff",
                      borderRadius: "4px",
                      padding: "3px 6px",
                      fontSize: "10px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px"
                    }}
                  >
                    {copied ? <Check size={11} color="#10b981" /> : <Copy size={11} />}
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre style={{ margin: 0, whiteSpace: "pre-wrap", lineHeight: 1.4 }}>
                  {post.codeSnippet}
                </pre>
              </div>
            )}
          </div>

          {/* Quick buttons */}
          <div style={{ display: "flex", gap: "10px", marginTop: "14px" }}>
            <a
              href={post.githubUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: isMobile ? "8px 12px" : "12px 18px",
                borderRadius: "10px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#fff",
                fontWeight: 600,
                fontSize: isMobile ? "12px" : "13px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              }}
            >
              <Code2 size={15} /> Source
            </a>
            <a
              href="https://gobikrishnan.vercel.app"
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                padding: isMobile ? "8px 12px" : "12px 18px",
                borderRadius: "10px",
                background: post.accentGradient,
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: isMobile ? "12px" : "13px",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px"
              }}
            >
              <ExternalLink size={15} /> Live
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Details & Features & Comments */}
        <div style={{
          flex: "1 1 400px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflowY: "auto",
          background: "#0c0d12"
        }}>
          {!isMobile && (
            <div style={{
              padding: "16px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "10px"
            }}>
              <div style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                padding: "2px",
                background: "var(--insta-gradient)"
              }}>
                <div style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  color: "#fff",
                  fontSize: "13px"
                }}>
                  GK
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "13px", color: "#fff" }}>
                  gobikrishnan.dev
                </div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)" }}>
                  Verified Author · Theni, TN
                </div>
              </div>
            </div>
          )}

          {/* Details Scroll Area */}
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: isMobile ? "14px" : "20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px"
          }}>
            {/* Tech Tags */}
            <div>
              <div style={{ fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "6px" }}>
                Tech Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
                {post.tech.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: "3px 8px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      fontSize: "11px",
                      fontWeight: 600,
                      color: "#e2e8f0"
                    }}
                  >
                    #{t.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <div style={{ fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "6px" }}>
                Engineering Highlights
              </div>
              <ul style={{ paddingLeft: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                {post.features?.map((ft, i) => (
                  <li key={i} style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.85)", lineHeight: 1.45 }}>
                    {ft}
                  </li>
                ))}
              </ul>
            </div>

            {/* Comments / Peer Notes */}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "12px" }}>
              <div style={{ fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: "8px" }}>
                Recruiter & Peer Feedback
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {comments.map((c, i) => (
                  <div key={i} style={{ fontSize: "12px", lineHeight: 1.4 }}>
                    <span style={{ fontWeight: 700, color: "#fff", marginRight: "6px" }}>
                      {c.user}
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.8)" }}>{c.text}</span>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                      {c.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Bar (Like, Comment, Save) */}
          <div style={{
            padding: "10px 16px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.3)"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <button
                  onClick={toggleLike}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    color: liked ? "#ef4444" : "#fff",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Heart size={22} fill={liked ? "#ef4444" : "none"} />
                </button>
                <button
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "#fff" }}
                  onClick={() => document.getElementById("insta-comment-input")?.focus()}
                >
                  <MessageCircle size={22} />
                </button>
                <button
                  style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: "#fff" }}
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert("Profile URL copied!");
                  }}
                >
                  <Send size={20} />
                </button>
              </div>

              <button
                onClick={() => setSaved(!saved)}
                style={{ background: "none", border: "none", cursor: "pointer", padding: 0, color: saved ? "#38bdf8" : "#fff" }}
              >
                <Bookmark size={22} fill={saved ? "#38bdf8" : "none"} />
              </button>
            </div>

            <div style={{ fontWeight: 700, fontSize: "12px", color: "#fff" }}>
              {likesCount} likes
            </div>
          </div>

          {/* Add comment */}
          <form
            onSubmit={handleAddComment}
            style={{
              padding: "10px 16px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "#08090d"
            }}
          >
            <input
              id="insta-comment-input"
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              style={{
                flex: 1,
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#fff",
                fontSize: "12px"
              }}
            />
            <button
              type="submit"
              disabled={!commentInput.trim()}
              style={{
                background: "none",
                border: "none",
                color: commentInput.trim() ? "#0095f6" : "rgba(255,255,255,0.3)",
                fontWeight: 700,
                fontSize: "12px",
                cursor: commentInput.trim() ? "pointer" : "default"
              }}
            >
              Post
            </button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}
