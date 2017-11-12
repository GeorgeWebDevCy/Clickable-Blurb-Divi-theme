<script type="text/javascript>
jQuery(document).ready(function($) {
    $(".blurb_click").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
    });
});
</script>