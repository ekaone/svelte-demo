<script>
  let m = { x: 0, y: 0 };

  function handleMouseMove(event) {
    m.x = event.clientX;
    m.y = event.clientY;
  }
</script>

<style>
  div {
    width: 100%;
    height: 100px;
    border-style: dashed;
    border-color: blueviolet;
    justify-content: center;
    display: flex;
    align-items: center;
  }
</style>

<div on:mousemove={handleMouseMove}>Mouse position: {m.x} x {m.y}</div>
