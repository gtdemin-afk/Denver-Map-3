var wms_layers = [];

var format_WorldMap_0 = new ol.format.GeoJSON();
var features_WorldMap_0 = format_WorldMap_0.readFeatures(json_WorldMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WorldMap_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WorldMap_0.addFeatures(features_WorldMap_0);
var lyr_WorldMap_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WorldMap_0, 
                style: style_WorldMap_0,
                popuplayertitle: 'World Map',
                interactive: true,
                title: '<img src="styles/legend/WorldMap_0.png" /> World Map'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2 = new ol.format.GeoJSON();
var features_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2 = format_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.readFeatures(json_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.addFeatures(features_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2);
var lyr_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2, 
                style: style_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2,
                popuplayertitle: 'ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956',
                interactive: true,
                title: '<img src="styles/legend/ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.png" /> ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956'
            });
var format_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3 = new ol.format.GeoJSON();
var features_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3 = format_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.readFeatures(json_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.addFeatures(features_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3);
var lyr_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3, 
                style: style_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3,
                popuplayertitle: 'ODC_PARK_PARKLAND_A_5450479956159193441 — PARK_PARKLAND_A.shp',
                interactive: true,
                title: '<img src="styles/legend/ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.png" /> ODC_PARK_PARKLAND_A_5450479956159193441 — PARK_PARKLAND_A.shp'
            });
var format_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4 = new ol.format.GeoJSON();
var features_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4 = format_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.readFeatures(json_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.addFeatures(features_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4);
var lyr_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4, 
                style: style_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4,
                popuplayertitle: 'ODC_TRANS_HIN_L_-3879907922374260188 — TRANS_HIN_L.shp',
                interactive: true,
                title: '<img src="styles/legend/ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.png" /> ODC_TRANS_HIN_L_-3879907922374260188 — TRANS_HIN_L.shp'
            });
var format_Fixedgeometries_5 = new ol.format.GeoJSON();
var features_Fixedgeometries_5 = format_Fixedgeometries_5.readFeatures(json_Fixedgeometries_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fixedgeometries_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fixedgeometries_5.addFeatures(features_Fixedgeometries_5);
var lyr_Fixedgeometries_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fixedgeometries_5, 
                style: style_Fixedgeometries_5,
                popuplayertitle: 'Fixed geometries',
                interactive: true,
                title: '<img src="styles/legend/Fixedgeometries_5.png" /> Fixed geometries'
            });
var format_Difference_6 = new ol.format.GeoJSON();
var features_Difference_6 = format_Difference_6.readFeatures(json_Difference_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Difference_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Difference_6.addFeatures(features_Difference_6);
var lyr_Difference_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Difference_6, 
                style: style_Difference_6,
                popuplayertitle: 'Difference',
                interactive: true,
                title: '<img src="styles/legend/Difference_6.png" /> Difference'
            });

lyr_WorldMap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.setVisible(true);lyr_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.setVisible(true);lyr_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.setVisible(true);lyr_Fixedgeometries_5.setVisible(true);lyr_Difference_6.setVisible(true);
var layersList = [lyr_WorldMap_0,lyr_OpenStreetMap_1,lyr_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2,lyr_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3,lyr_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4,lyr_Fixedgeometries_5,lyr_Difference_6];
lyr_WorldMap_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY': 'COUNTY', 'GLOBALID': 'GLOBALID', });
lyr_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.set('fieldAliases', {'LOCATION': 'LOCATION', 'FORMAL_NAM': 'FORMAL_NAM', 'LOC_CODE': 'LOC_CODE', 'PARK_TYPE': 'PARK_TYPE', 'PARK_CLASS': 'PARK_CLASS', 'GIS_ACRES': 'GIS_ACRES', 'DESIGNATED': 'DESIGNATED', 'FIRST_AQ_D': 'FIRST_AQ_D', 'MASTER_PLA': 'MASTER_PLA', 'MAINT_DIST': 'MAINT_DIST', 'COUNCIL_DI': 'COUNCIL_DI', 'POLICE_DIS': 'POLICE_DIS', 'CROSS_STRE': 'CROSS_STRE', 'ADDRESS_ID': 'ADDRESS_ID', 'ADDRESS_LI': 'ADDRESS_LI', 'ADDRESS__1': 'ADDRESS__1', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'MARKETING_': 'MARKETING_', 'FACILITIES': 'FACILITIES', 'DIAGRAM': 'DIAGRAM', 'PHOTO': 'PHOTO', 'PARCEL_MAT': 'PARCEL_MAT', 'BND_QC': 'BND_QC', 'GLOBALID': 'GLOBALID', });
lyr_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.set('fieldAliases', {'StreetName': 'StreetName', 'CrashRate': 'CrashRate', 'Tier': 'Tier', 'GlobalID': 'GlobalID', });
lyr_Fixedgeometries_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY': 'COUNTY', 'GLOBALID': 'GLOBALID', });
lyr_Difference_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COUNTY': 'COUNTY', 'GLOBALID': 'GLOBALID', });
lyr_WorldMap_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.set('fieldImages', {'OBJECTID': 'Range', 'COUNTY': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.set('fieldImages', {'LOCATION': 'TextEdit', 'FORMAL_NAM': 'TextEdit', 'LOC_CODE': 'TextEdit', 'PARK_TYPE': 'TextEdit', 'PARK_CLASS': 'TextEdit', 'GIS_ACRES': 'TextEdit', 'DESIGNATED': 'TextEdit', 'FIRST_AQ_D': 'TextEdit', 'MASTER_PLA': 'TextEdit', 'MAINT_DIST': 'TextEdit', 'COUNCIL_DI': 'TextEdit', 'POLICE_DIS': 'TextEdit', 'CROSS_STRE': 'TextEdit', 'ADDRESS_ID': 'TextEdit', 'ADDRESS_LI': 'TextEdit', 'ADDRESS__1': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'MARKETING_': 'TextEdit', 'FACILITIES': 'TextEdit', 'DIAGRAM': 'TextEdit', 'PHOTO': 'TextEdit', 'PARCEL_MAT': 'TextEdit', 'BND_QC': 'DateTime', 'GLOBALID': 'TextEdit', });
lyr_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.set('fieldImages', {'StreetName': 'TextEdit', 'CrashRate': 'TextEdit', 'Tier': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_Fixedgeometries_5.set('fieldImages', {'OBJECTID': 'Range', 'COUNTY': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_Difference_6.set('fieldImages', {'OBJECTID': 'Range', 'COUNTY': 'TextEdit', 'GLOBALID': 'TextEdit', });
lyr_WorldMap_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_ODC_ENG_SRVCCDBOUNDARY_A_4093393513688153956_2.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY': 'no label', 'GLOBALID': 'no label', });
lyr_ODC_PARK_PARKLAND_A_5450479956159193441PARK_PARKLAND_Ashp_3.set('fieldLabels', {'LOCATION': 'no label', 'FORMAL_NAM': 'no label', 'LOC_CODE': 'no label', 'PARK_TYPE': 'no label', 'PARK_CLASS': 'no label', 'GIS_ACRES': 'no label', 'DESIGNATED': 'no label', 'FIRST_AQ_D': 'no label', 'MASTER_PLA': 'no label', 'MAINT_DIST': 'no label', 'COUNCIL_DI': 'no label', 'POLICE_DIS': 'no label', 'CROSS_STRE': 'no label', 'ADDRESS_ID': 'no label', 'ADDRESS_LI': 'no label', 'ADDRESS__1': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'MARKETING_': 'no label', 'FACILITIES': 'no label', 'DIAGRAM': 'no label', 'PHOTO': 'no label', 'PARCEL_MAT': 'no label', 'BND_QC': 'no label', 'GLOBALID': 'no label', });
lyr_ODC_TRANS_HIN_L_3879907922374260188TRANS_HIN_Lshp_4.set('fieldLabels', {'StreetName': 'no label', 'CrashRate': 'no label', 'Tier': 'no label', 'GlobalID': 'no label', });
lyr_Fixedgeometries_5.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY': 'no label', 'GLOBALID': 'no label', });
lyr_Difference_6.set('fieldLabels', {'OBJECTID': 'no label', 'COUNTY': 'no label', 'GLOBALID': 'no label', });
lyr_Difference_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});