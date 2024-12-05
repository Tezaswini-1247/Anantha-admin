"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const groups = "Kumpulan";
const models = "Jenis Koleksi";
const pageNotFound = "Laman tidak dijumpai";
const ms = {
  "EditRelations.title": "Data Terhubung(Relational data)",
  "api.id": "ID API",
  "components.AddFilterCTA.add": "Penapis",
  "components.AddFilterCTA.hide": "Penapis",
  "components.DraggableAttr.edit": "Klik untuk mengedit",
  "components.DynamicZone.pick-compo": "Pilih satu komponen",
  "components.EmptyAttributesBlock.button": "Pergi ke halaman tetapan",
  "components.EmptyAttributesBlock.description": "Anda boleh ubah tetapan anda",
  "components.FieldItem.linkToComponentLayout": "Tetapkan susun atur komponen",
  "components.FilterOptions.button.apply": "Gunakan",
  "components.FiltersPickWrapper.PluginHeader.actions.apply": "Gunakan",
  "components.FiltersPickWrapper.PluginHeader.actions.clearAll": "Kosongkan semua",
  "components.FiltersPickWrapper.PluginHeader.description": "Tetapkan syarat yang akan digunakan untuk tapis entri",
  "components.FiltersPickWrapper.PluginHeader.title.filter": "Tapisan",
  "components.FiltersPickWrapper.hide": "Sembunyikan",
  "components.LimitSelect.itemsPerPage": "Item setiap halaman",
  "components.Search.placeholder": "Cari entri..",
  "components.SettingsViewWrapper.pluginHeader.description.edit-settings": "Ubah paparan untuk pengeditan.",
  "components.SettingsViewWrapper.pluginHeader.description.list-settings": "Tentukan tetapan paparan senarai.",
  "components.SettingsViewWrapper.pluginHeader.title": "Konfigurasikan paparan - {name}",
  "components.TableDelete.delete": "Padam semua",
  "components.TableDelete.deleteSelected": "Padam yang dipilih",
  "components.TableEmpty.withFilters": "Tiada {contentType} dalam tapisan...",
  "components.TableEmpty.withSearch": "Tiada {contentType} yang sesuai dengan carian ({search})...",
  "components.TableEmpty.withoutFilter": "Tiada {contentType}...",
  "components.empty-repeatable": "Belum ada entri. Klik pada butang di bawah untuk tambah satu",
  "components.notification.info.maximum-requirement": "Anda sudah mencapai bilangan ruang maksimum",
  "components.notification.info.minimum-requirement": "Ruang telah ditambahkan untuk memenuhi syarat minimum",
  "components.reset-entry": "Tetapkan semula entri",
  "components.uid.apply": "Gunakan",
  "components.uid.available": "Tersedia",
  "components.uid.regenerate": "jana semula",
  "components.uid.suggested": "yang dicadangkan",
  "components.uid.unavailable": "tidak tersedia",
  "containers.Edit.Link.Layout": "Konfigurasikan susun atur",
  "containers.Edit.Link.Model": "Edit jenis koleksi",
  "containers.Edit.addAnItem": "Tambah item...",
  "containers.Edit.clickToJump": "Klik untuk pergi ke entri",
  "containers.Edit.delete": "Padam",
  "containers.Edit.editing": "Menyunting...",
  "containers.Edit.pluginHeader.title.new": "Buat entri",
  "containers.Edit.reset": "Semula",
  "containers.Edit.returnList": "Kembali ke senarai",
  "containers.Edit.seeDetails": "Butiran",
  "containers.Edit.submit": "Simpan",
  "containers.EditSettingsView.modal-form.edit-field": "Edit ruang",
  "containers.EditView.notification.errors": "Borang mengandungi beberapa kesalahan",
  "containers.Home.introduction": "Untuk mengedit entri anda, pergi ke pautan yang ditetapkan di menu sebelah kiri. Plugin ini tidak mempunyai cara yang betul untuk mengedit tetapan dan masih dalam pembangunan yang aktif",
  "containers.Home.pluginHeaderDescription": "Uruskan entri anda melalui antaramuka yang hebat dan cantik.",
  "containers.Home.pluginHeaderTitle": "Pengurus Kandungan",
  "containers.List.errorFetchRecords": "Ralat",
  "containers.list.displayedFields": "Ruang yang dipamirkan",
  "containers.ListSettingsView.modal-form.edit-label": "Edit label",
  "containers.SettingPage.add.field": "Tambah ruang lain",
  "containers.SettingPage.attributes": "Ruang ciri-ciri",
  "containers.SettingPage.attributes.description": "Tentukan tertib untuk ciri-ciri",
  "containers.SettingPage.editSettings.description": "Tarik & Lepas ruang untuk menyusun atur",
  "containers.SettingPage.editSettings.entry.title": "Pilihan nama entri",
  "containers.SettingPage.editSettings.entry.title.description": "Pilih ruang yang akan dipaparkan sebagai nama untuk entri anda.",
  "containers.SettingPage.editSettings.title": "Edit paparan (tetapan)",
  "containers.SettingPage.layout": "Susun atur",
  "containers.SettingPage.listSettings.description": "Tetapkan pilihan yang ada untuk jenis koleksi ini",
  "containers.SettingPage.listSettings.title": "Paparan senarai (tetapan)",
  "containers.SettingPage.pluginHeaderDescription": "Tetapkan tetapan khusus untuk Jenis Koleksi ini",
  "containers.SettingPage.settings": "Tetapan",
  "containers.SettingPage.view": "Sususnan",
  "containers.SettingViewModel.pluginHeader.title": "Pengurus Kandungan - {name}",
  "containers.SettingsPage.Block.contentType.description": "Tetapkan tetapan tertentu",
  "containers.SettingsPage.Block.contentType.title": "Jenis Koleksi(Collection Types)",
  "containers.SettingsPage.Block.generalSettings.description": "Tetapkan pilihan lalai untuk Jenis Koleksi anda",
  "containers.SettingsPage.Block.generalSettings.title": "Am(General)",
  "containers.SettingsPage.pluginHeaderDescription": "Tetapkan tetapan untuk semua Jenis koleksi dan Kumpulan anda",
  "containers.SettingsView.list.subtitle": "Tetapkan susun atur dan paparan Jenis koleksi dan kumpulan anda",
  "containers.SettingsView.list.title": "Paparan konfigurasi",
  "emptyAttributes.button": "Pergi ke pembina jenis koleksi",
  "emptyAttributes.description": "Tambah ruang pertama anda ke Jenis Koleksi anda",
  "emptyAttributes.title": "Belum ada ruang",
  "error.attribute.key.taken": "Nilai ini sudah ada",
  "error.attribute.sameKeyAndName": "Tidak boleh sama",
  "error.attribute.taken": "Nama ruang ini sudah ada",
  "error.contentTypeName.taken": "Nama ini sudah ada",
  "error.model.fetch": "Ralat berlaku sewaktu mendapatkan tetapan model ",
  "error.record.create": "Ralat berlaku sewaktu membuat rekod.",
  "error.record.delete": "Ralat berlaku sewaktu penghapusan rekod.",
  "error.record.fetch": "Ralat berlaku sewaktu mendapatkan rekod.",
  "error.record.update": "Ralat berlaku sewaktu mengemaskini rekod.",
  "error.records.count": "Ralat berlaku sewaktu mendapatkan kiraan rekod.",
  "error.records.fetch": "Ralat berlaku sewaktu mendapatkan rekod.",
  "error.schema.generation": "Ralat berlaku sewaktu penghasilan skema.",
  "error.validation.json": "Ini bukan JSON(This is not a JSON)",
  "error.validation.max": "Nilai isinya terlalu tinggi.",
  "error.validation.maxLength": "Panjang isinya terlalu panjang.",
  "error.validation.min": "Nilai isinya terlalu rendah.",
  "error.validation.minLength": "Panjang isinya terlalu pendek.",
  "error.validation.minSupMax": "Tidak boleh lebih tinggi",
  "error.validation.regex": "Nilai isinya tidak sepadan dengan regex.",
  "error.validation.required": "Nilai input ini adalah wajib",
  "form.Input.bulkActions": "Benarkan tindakan pukal",
  "form.Input.defaultSort": "Ciri tertib yang lalai",
  "form.Input.description": "Penerangan",
  "form.Input.description.placeholder": "Paparkan nama dalam profil",
  "form.Input.editable": "Ruang yang boleh diedit",
  "form.Input.filters": "Benarkan tapisan",
  "form.Input.label": "Label",
  "form.Input.label.inputDescription": "Isinya ini menggantikan label yang dipaparkan di tajuk jadual",
  "form.Input.pageEntries": "Entri setiap halaman",
  "form.Input.pageEntries.inputDescription": "Catatan: Anda boleh menukarkan nilai ini di halaman tetapan Jenis Koleksi",
  "form.Input.placeholder": "Pemegang Tempat",
  "form.Input.placeholder.placeholder": "My awesome value",
  "form.Input.search": "Benarkan carian",
  "form.Input.search.field": "Benarkan carian di ruang ini",
  "form.Input.sort.field": "Benarkan penyusunan di ruang ini",
  "form.Input.wysiwyg": "Paparkan sebagai WYSIWYG",
  "global.displayedFields": "Ruang yang dipaparkan",
  groups,
  "groups.numbered": "Kumpulan ({number})",
  models,
  "models.numbered": "Jenis Koleksi ({number})",
  "notification.error.displayedFields": "Anda perlukan sekurang-kurangnya satu ruang yang dipaparkan",
  "notification.error.relationship.fetch": "Ralat berlaku sewaktu mendapatkan perhubungan data.",
  "notification.info.SettingPage.disableSort": "Anda mesti mempunyai satu attribute dengan penertib yang telah dibenarkan(You need to have one attribute with the sorting allowed)",
  "notification.info.minimumFields": "Anda mesti memaparkan sekurang-kurangnya satu ruang",
  "notification.upload.error": "Berlaku ralat sewaktu memuat naik fail anda",
  pageNotFound,
  "plugin.description.long": "Cara cepat untuk melihat, mengedit dan menghapus data dalam pangkalan data anda.",
  "plugin.description.short": "Cara cepat untuk melihat, mengedit dan menghapus data dalam pangkalan data anda.",
  "popUpWarning.bodyMessage.contentType.delete": "Adakah anda pasti mahu memadam entri ini?",
  "popUpWarning.bodyMessage.contentType.delete.all": "Adakah anda pasti mahu memadam entri ini?",
  "popUpWarning.warning.cancelAllSettings": "Adakah anda pasti mahu membatalkan pengubahsuaian anda?",
  "popUpWarning.warning.updateAllSettings": "Ini akan mengubah semua tetapan anda",
  "success.record.delete": "Telah Dipadam",
  "success.record.save": "Disimpan"
};
exports.default = ms;
exports.groups = groups;
exports.models = models;
exports.pageNotFound = pageNotFound;
//# sourceMappingURL=ms-BuFotyP_.js.map