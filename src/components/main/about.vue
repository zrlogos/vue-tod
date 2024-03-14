<template>
  <div class="corridor-tod-container">
    <h1 class="title">廊道TOD研究 意义:</h1>
    <ul class="tod-list">
      <li v-for="(item, index) in todPoints" :key="index" class="tod-item" @mouseenter="hoverItem(index)" @mouseleave="hoverItem(null)">
        <transition name="fade">
          <div v-if="hoveredIndex === index" class="tod-description">
            {{ item.description }}
          </div>
        </transition>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredIndex: null,
      todPoints: [
        { title: '1.协调土地利用性质及开发强度', description: '解释1...' },
        { title: '2.营造适宜步行及自行车行驶的空间环境', description: '解释2...' },
        { title: '3.构成多种目的地交互性强、可达性高的发展廊道', description: '解释3...' },
        { title: '4.形成大城市群，有效解决大城市病', description: '解释4...' },
      ]
    };
  },
  methods: {
    hoverItem(index) {
      this.hoveredIndex = index;
    }
  }
};
</script>

<style scoped>
.corridor-tod-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.tod-list {
  list-style: none;
  padding: 0;
}

.tod-item {
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.tod-item:hover {
  color: #3498db;
}

.tod-description {
  margin-top: 5px;
  font-size: 14px;
  line-height: 1.4;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>