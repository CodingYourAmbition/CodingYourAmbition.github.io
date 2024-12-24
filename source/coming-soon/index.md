---
title: 下期预告
subtitle: 即将发布的博客主题
date: 2024-12-24 10:14:25
layout: coming-soon
---
<style>
  .preview-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  
  .preview-card {
    background: transparent;
    border-radius: 8px;
    border: 1px solid rgba(125, 125, 125, 0.2);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: transform 0.2s ease;
    backdrop-filter: blur(5px);
  }
  
  .preview-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .preview-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  .preview-meta {
    font-size: 0.9rem;
    opacity: 0.7;
    margin-bottom: 1rem;
  }
  
  .preview-description {
    line-height: 1.6;
    opacity: 0.9;
  }
  
  .preview-tag {
    display: inline-block;
    background: rgba(125, 125, 125, 0.1);
    padding: 0.2rem 0.8rem;
    border-radius: 15px;
    font-size: 0.85rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .progress-container {
    margin-top: 1rem;
    background: rgba(125, 125, 125, 0.1);
    border-radius: 10px;
    height: 8px;
  }
  
  .progress-bar {
    height: 100%;
    border-radius: 10px;
    background: linear-gradient(to right, #64b5f6, #2196f3);
    transition: width 0.3s ease;
  }
</style>

<div class="preview-container">
  <div class="preview-card">
    <h2 class="preview-title">深入理解 React Hooks</h2>
    <div class="preview-meta">
      <span>计划发布时间: 2024-12-30</span>
    </div>
    <div>
      <span class="preview-tag">React</span>
      <span class="preview-tag">JavaScript</span>
      <span class="preview-tag">前端开发</span>
    </div>
    <p class="preview-description">
      本文将深入探讨 React Hooks 的工作原理，包括常见的使用场景、性能优化技巧，以及自定义 Hook 的最佳实践。
    </p>
    <div class="progress-container">
      <div class="progress-bar" style="width: 60%"></div>
    </div>
  </div>

  <div class="preview-card">
    <h2 class="preview-title">Docker 容器化实战指南</h2>
    <div class="preview-meta">
      <span>计划发布时间: 2025-01-05</span>
    </div>
    <div>
      <span class="preview-tag">Docker</span>
      <span class="preview-tag">DevOps</span>
      <span class="preview-tag">容器化</span>
    </div>
    <p class="preview-description">
      从零开始学习 Docker，包括基础概念、常用命令、Dockerfile 编写，以及在实际项目中的应用案例。
    </p>
    <div class="progress-container">
      <div class="progress-bar" style="width: 30%"></div>
    </div>
  </div>
</div>

