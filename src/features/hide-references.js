export const hideReferences = () => {
  $('.Details').each(function(i, obj) {
    $(obj).removeClass('Details--on')
  });
};
